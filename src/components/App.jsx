import { useState } from "react";
import "../App.css";
import { LoginForm } from "./LoginForm.jsx";
import { AppLogin } from "./AppLogin.jsx";
import { NavBar } from "./NavBar.jsx";
import { CoffeeList } from "./CoffeeList.jsx";

const coffees = [
  {
    id: 1,
    brand: "Tanat",
    name: "ABC",
    price: "399kr",
    addedBy: "harshal",
  },
  {
    id: 2,
    brand: "Circulor",
    name: "Test",
    price: "369kr",
    addedBy: "harshal",
  },
  {
    id: 3,
    brand: "Gringo",
    name: "Ringo",
    price: "299kr",
    addedBy: "harshal",
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavBar username={username} isAuthenticated={isAuthenticated} />
      {isAuthenticated ? (
        <div>
          <AppLogin username={username} />
          <CoffeeList coffees={coffees} />
        </div>
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
