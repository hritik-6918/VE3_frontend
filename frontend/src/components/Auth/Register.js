import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../../services/authService";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authService.register(username, password);
    history.push("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
