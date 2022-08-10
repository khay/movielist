"use strict";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import USER from "../models/user.model";
import config from "../config/index";

async function loginService(reqInfo) {
  try {
    const { email, password } = reqInfo;

    if (!(email && password)) {
      let error = { message: "Please provide all inputs." };
      error.statusCode = 400;
      throw error;
    }

    const user = await USER.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate token
      const token = jwt.sign({ user_id: user._id, email }, config.tokenKey, {
        expiresIn: "2h",
      });

      user.token = token;
      return user;
    } else {
      let error = { message: "Invalid Credentials" };
      error.statusCode = 400;
      throw error;
    }
  } catch (error) {
    const err = new Error();
    err.message =
      error.message || "Error occurs while retrieving topic details";
    err.statusCode = error.statusCode || 500;
    throw err;
  }
}

async function registerService(reqInfo) {
  try {
    // Get the inputs
    const { first_name, last_name, email, password } = reqInfo;

    if (!(first_name && last_name && email && password)) {
      let error = { message: "Please provide all inputs." };
      error.statusCode = 400;
      throw error;
    }

    // Check if the user exist with the provided email address
    const existingUser = await USER.findOne({ email });
    if (existingUser) {
      let error = { message: "User already exist. Please login." };
      error.statusCode = 409;
      throw error;
    }

    // Encrypt user password
    let encryptedPassword = await bcrypt.hash(password, 10);

    // Create a new user in database
    const user = await USER.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Generate Token
    const token = jwt.sign({ user_id: user._id, email }, config.tokenKey, {
      expiresIn: "2h",
    });
    user.token = token;
    return user;
  } catch (error) {
    const err = new Error();
    err.message =
      error.message || "Error occurs while retrieving topic details";
    err.statusCode = error.statusCode || 500;
    throw err;
  }
}

export { loginService, registerService };
