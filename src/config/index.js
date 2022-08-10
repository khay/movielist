import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;

const config = {
  db: MONGO_URI || "mongodb://localhost/movielist",
  port: 3000,
  tokenKey: "C0dingCh@llenge",
};

export default config;
