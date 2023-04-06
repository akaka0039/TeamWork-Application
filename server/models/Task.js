import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    taskDate: {
      type: String,
    },
    status: {
      type: String,
    },
    priority: {
      type: String,
    },
  },

  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
export default Task;
