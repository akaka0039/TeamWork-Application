import User from "../models/User.js";
import Task from "../models/Task.js";

/* create task */
export const createTask = async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

// /* update Task */
export const updateTask = async (req, res) => {
  try {
    const task = await Post.findById(req.params.id);
    try {
      const updatedTask = await task.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedTask);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

/* delete post */
export const deleteTask = async (req, res) => {
  try {
    const task = await task.findById(req.params.id);
    try {
      await post.delete();
      res.status(200).json("Tost has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// /* get a post */
export const getTask = async (req, res) => {
  try {
    const task = await Tost.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllTask = async (req, res) => {
  const task = req.query.task;
  const catName = req.query.cat;
  try {
    let tasks;
    if (task) {
      tasks = await Task.find({ task });
    } else if (catName) {
      tasks = await Task.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      tasks = await Task.find();
    }
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};
