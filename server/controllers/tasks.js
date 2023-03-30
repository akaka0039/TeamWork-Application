import express from "express";
const tasksRouter = express.Router();
import Task from "../models/Task.js";

tasksRouter.get("/", (request, response) => {
  return Task.find({}).then((tasks) => {
    response.json(tasks);
  });
});

tasksRouter.post("/", (request, response, next) => {
  const { body } = request;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const task = new Task({ ...body.content });

  task
    .save()
    .then((savedTask) => {
      response.json(savedTask);
    })
    .catch((error) => next(error));
});

tasksRouter.get("/:id", (request, response, next) => {
  Task.findById(request.params.id)
    .then((task) => {
      if (task) {
        response.json(task);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

tasksRouter.delete("/:id", (request, response, next) => {
  Task.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

tasksRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const task = { ...body.content };

  Task.findByIdAndUpdate(request.params.id, task, { new: true })
    .then((updatedTask) => {
      response.json(updatedTask);
    })
    .catch((error) => next(error));
});

export default tasksRouter;
