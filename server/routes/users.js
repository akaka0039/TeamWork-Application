import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controllers/users.js";

const router = express.Router();

router.route("/").get(getAllUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
