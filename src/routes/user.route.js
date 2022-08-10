import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);

export default app => {
  app.use('/api/v1', router)
}