import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
// import taskRoutes from "./routes/tasks.js";

/* Routes */

const app = express();
app.use(express.json);

dotenv.config();

mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to MONGODB"))
  .catch((err) => console.log(err));

/* Route */
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", taskRoutes);

app.listen("5000", () => {
  console.log("background is running");
});
