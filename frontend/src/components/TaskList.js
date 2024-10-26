import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import taskService from "../services/taskService";
import { AuthContext } from "../contexts/AuthContext";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await taskService.getTasks(user.token);
      setTasks(fetchedTasks);
    };

    if (user) {
      fetchTasks();
    }
  }, [user]);

  return (
    <div>
      <h1>Your Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <Link to={`/task/${task._id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
