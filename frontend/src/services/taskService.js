import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

const getTasks = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const getTaskById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createTask = async (taskData, token) => {
  const response = await axios.post(API_URL, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const updateTask = async (id, taskData, token) => {
  const response = await axios.put(`${API_URL}/${id}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const deleteTask = async (id, token) => {
  await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default { getTasks, getTaskById, createTask, updateTask, deleteTask };
