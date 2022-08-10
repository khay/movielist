import express from "express";
import MovieController from "../controllers/movie.controller";
import { verifyToken } from "../middlewares/handlers.middleware";

const router = express.Router();

router.get("/", MovieController.getMovileList);
router.get("/:id", MovieController.getMovileDetail);

export default app => {
  app.use('/api/v1/movies', verifyToken, router)
}