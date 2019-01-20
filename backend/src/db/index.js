import mongoose from "mongoose";
import { MONGO_PORT } from "../config";

mongoose.connect(
  `mongodb://mongo:${MONGO_PORT}/test`,
  { useNewUrlParser: true }
);
