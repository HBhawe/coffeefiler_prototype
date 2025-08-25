import { useState } from "react";
import "../App.css";
import { LoginForm } from "./LoginForm.jsx";
import { AppName } from "./AppName.jsx";
import { AppLogin } from "./AppLogin.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavBar username={username} isAuthenticated={isAuthenticated} />
      <AppName />
      {isAuthenticated ? (
        <AppLogin username={username} />
      ) : (
        <LoginForm
          username={username}
          handleSetUsername={setUsername}
          password={password}
          handleSetPassword={setPassword}
          isAuthenticated={isAuthenticated}
          handleAuthentication={setIsAuthenticated}
        />
      )}
    </>
  );
}

function NavBar({ username, isAuthenticated }) {
  return (
    <div className="navbar">
      <div className="title">
        <span>CoffeeFiler</span>
      </div>
      <div className="function-buttons">
        <button className="navbar-toggler" type="button">
          Register
        </button>
        <button className="navbar-toggler" type="button">
          Login
        </button>
        {isAuthenticated ? (
          <button className="navbar-toggler" type="button">
            {username}'s profile
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
