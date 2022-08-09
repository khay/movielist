export const errorHandler = (error, req, res, next) => {
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
