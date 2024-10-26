import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/task/:id" component={TaskDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
