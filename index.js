import express from "express";
import mongoose from "mongoose";
import config from "./src/config/index";
import bodyParser from "body-parser";
import router from "./src/routes/movie.route";
import { errorHandler } from "./src/middlewares/handlers.middleware";

const app = express();

// Mongoose connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(config.db);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/api/v1/movies", router);

app.use(errorHandler)

app.listen(config.port, () => {
  console.log("Server started on port 3000");
});
