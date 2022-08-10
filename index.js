import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import config from "./src/config/index";
import bodyParser from "body-parser";
import path from "path";
import glob from "glob";
import { errorHandler } from "./src/middlewares/handlers.middleware";

const app = express();
dotenv.config();

// Mongoose connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(config.db);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const dir = path.join(__dirname, "./src/routes/*.js");
const routes = glob.sync(dir);
routes.forEach((route) => {
  require(route).default(app);
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log("Server started on port 3000");
});
