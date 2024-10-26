import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";

function TaskForm({ fetchTasks, taskId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskId) {
      const fetchTask = async () => {
        const task = await taskService.getTaskById(taskId);
        setTitle(task.title);
        setDescription(task.description);
      };

      fetchTask();
    }
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskId) {
      await taskService.updateTask(taskId, { title, description });
    } else {
      await taskService.createTask({ title, description });
    }
    fetchTasks();
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <button type="submit">{taskId ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;
