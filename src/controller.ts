//import modules
import { Request, Response } from "express";
import { TasklistService } from "./service";
import { Task } from "./types";

class tasklistController {
  addtask = async (req: Request, res: Response) => {
    //data to be saved in database
    const data: Task = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      quantity: req.body.quantity,
      purchased: req.body.purchased,
    };
    const task = await TasklistService.addTask(data);
    res.status(201).send(task);
  };

  //get all task
  getTasks = async (req: Request, res: Response) => {
    const tasks = await TasklistService.getTasks();
    res.send(tasks);
  };

  //update task
  updateTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    const task = await TasklistService.updateTask(
      parseInt(id),
      req.body as Task
    );
    res.send(task);
  };

  //delete a task
  deleteTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    await TasklistService.deleteTask(parseInt(id));
    res.status(200).json({ message: `Task ${id} successfully deleted` });
  };
}

//export class
export const TaskController = new tasklistController();
