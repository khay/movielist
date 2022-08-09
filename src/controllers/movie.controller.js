import {
  getMovileListService,
  getMovileDetailService,
} from "../services/movie.service";

// Get all movie list with pagination
async function getMovileList(req, res, next) {
  try {
    let movies = await getMovileListService(req.query);
    return res.status(200).send(movies);
  } catch (err) {
    next(err);
  }
}

// Get a movile detail of the provided id
async function getMovileDetail(req, res, next) {
  try {
    let movie = await getMovileDetailService(req.params);
    return res.status(200).send(movie);
  } catch (err) {
    next(err);
  }
}

export default { getMovileList, getMovileDetail };
