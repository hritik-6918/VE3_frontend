import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authService.login(username, password);
    setUser(userData);
    history.push("/");
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
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
