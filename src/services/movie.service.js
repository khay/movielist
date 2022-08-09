"use strict";
import MOVIE from "../models/movie.model";

async function getMovileListService(reqInfo) {
  try {
    let movies = await MOVIE.find();
    return movies;
  } catch (error) {
    const err = new Error();
    err.message =
      error.message || "Error occurs while retrieving topic details";
    err.statusCode = error.statusCode || 500;
    throw err;
  }
}

async function getMovileDetailService(reqInfo) {
  try {
    let movie = await MOVIE.findById(reqInfo.id);
    if (movie) {
      return movie;
    } else {
      let error = { message: "Please provide a valid movie id." };
      error.statusCode = 404;
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

export { getMovileListService, getMovileDetailService };
