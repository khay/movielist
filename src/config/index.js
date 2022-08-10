import dotenv from "dotenv"
dotenv.config();

const config = {
  db: "mongodb://localhost/movielist",
  port: 3000,
  tokenKey: "C0dingCh@llenge",
};

export default config;
