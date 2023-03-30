import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // or ObjectId?
    memberId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      // what are the statuses?
      default: 1,
      // // required: true, // can probably use a default value
    },
    // can probably use a default value
    priority: {
      type: String,
      default: "medium",
      // // required: true, // can probably use a default value
    },
  }

  // is this necessary?
  // { timestamps: true }
);

// when converting from bson to json, format id and remove version
// toJson runs when using, eg. res.json() or JSON.stringify()
TaskSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
