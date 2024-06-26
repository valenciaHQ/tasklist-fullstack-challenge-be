//importing modules
import express from "express";
import { TaskController } from "./controller";

//initiating the router
export const router = express.Router();

//add task route
router.post("/", TaskController.addtask);

//get tasks
router.get("/", TaskController.getTasks);

//update a task
router.put("/:id", TaskController.updateTask);

//delete a task
router.delete("/:id", TaskController.deleteTask);
