import express from "express";
import {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.js";

const router = express.Router();

router.route("/").get(getAllTask).put(createTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

export default router;
