import { loginService, registerService } from "../services/user.service";

// Get all movie list with pagination
async function login(req, res, next) {
  try {
    let user = await loginService(req.body);
    return res.status(200).send(user);
  } catch (err) {
    next(err);
  }
}

// Get a movile detail of the provided id
async function register(req, res, next) {
  try {
    let user = await registerService(req.body);
    return res.status(200).send(user);
  } catch (err) {
    next(err);
  }
}

export default { login, register };
