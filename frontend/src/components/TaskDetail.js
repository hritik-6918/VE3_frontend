import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import taskService from "../services/taskService";

function TaskDetail() {
  const { id } = useParams();
  const history = useHistory();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const fetchedTask = await taskService.getTaskById(id);
      setTask(fetchedTask);
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    await taskService.deleteTask(id);
    history.push("/");
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
}

export default TaskDetail;
