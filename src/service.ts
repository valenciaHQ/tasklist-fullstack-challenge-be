import pool from "../db";
import { Task } from "./types";

class tasklistService {
  //get all task
  getTasks = async () => {
    try {
      const result = await pool.query("SELECT * FROM tasks");
      const tasks: Task[] = result.rows;
      return tasks;
    } catch (error) {
      console.error("Error fetching todos", error);
      throw new Error("Error fetching todos");
    }
  };

  addTask = async (task: Task) => {
    const result = await pool.query(
      "INSERT INTO tasks (title, description, quantity, purchased, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [task.title, task.description, task.quantity, task.purchased, new Date()]
    );
    const createdTask: Task = result.rows[0];
    return createdTask;
  };

  updateTask = async (id: number, task: Task) => {
    await pool.query(
      "UPDATE tasks SET title = $1, description = $2, quantity = $3, purchased = $4 WHERE task_id = $5",
      [task.title, task.description, task.quantity, task.purchased, id]
    );
  };

  deleteTask = async (id: number) => {
    await pool.query("DELETE FROM tasks WHERE task_id = $1", [id]);
    return true;
  };
}

export const TasklistService = new tasklistService();
