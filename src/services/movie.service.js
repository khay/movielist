"use strict";
import MOVIE from "../models/movie.model";

// Return list of movies
// page and limit for pagination
// keyword to search the movie
async function getMovileListService(reqInfo) {
  // destructure page and limit and set default values
  const { page = 1, limit = 5, keyword = "", genre = "", year = "" } = reqInfo;
  try {    
    let query = {
      $and: [
        { title: { $regex: keyword, $options: "i" } },
        { genre: { $regex: genre, $options: "i" } },
        { productionYear: { $regex: year, $options: "i" } },
      ],
    };    
    let movies = await MOVIE.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await MOVIE.countDocuments(query);
    return {
      movies,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    };
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
