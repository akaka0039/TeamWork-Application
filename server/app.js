import * as config from "./utils/config.js";
import express from "express";
const app = express();
import cors from "cors";
import tasksRouter from "./controllers/tasks.js";
import * as middleware from "./utils/middleware.js";
import * as logger from "./utils/logger.js";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
// app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/tasks", tasksRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
