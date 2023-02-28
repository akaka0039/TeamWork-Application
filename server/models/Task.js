import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    memberId: {
      type: Array,
    },
    status: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
export default Task;
