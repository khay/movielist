require("dotenv").config();
const { MONGO_URI, PORT } = process.env;

const config = {
  db: MONGO_URI,
  port: PORT,
};

export default config;
