import {useState} from "react";
import "../App.css";
import {LoginForm} from "./LoginForm.jsx";
import {AppName} from "./AppName.jsx";
import {AppLogin} from "./AppLogin.jsx";
import {NavBar} from "./NavBar.jsx";

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

export default App;
