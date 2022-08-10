import jwt from "jsonwebtoken";
import config from "../config/index";

const errorHandler = (error, req, res, next) => {
  //  console.log('In Error Handlers Middleware', error);
  const {
    statusCode = 500,
    status,
    message = "Something went wrong",
    data,
    validation,
  } = error;

  res.status(status || statusCode).json({
    message,
    data,
    validation,
  });
};

// Token verification for all logged in user
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for Authentication");
  }

  try {
    const decoded = jwt.verify(token, config.tokenKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export { errorHandler, verifyToken };
