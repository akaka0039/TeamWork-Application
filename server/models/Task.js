import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    taskId: {
      type: String,
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
