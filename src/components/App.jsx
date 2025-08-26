import {useState} from "react";
import "../App.css";
import {LoginForm} from "./LoginForm.jsx";
import {AppName} from "./AppName.jsx";
import {AppLogin} from "./AppLogin.jsx";
import {NavBar} from "./NavBar.jsx";


const coffees = [
    {
        id: 1,
        name:"Tanat abc",
        price:'399kr'
    },
    {
        id: 2,
        name:"Circulor abc",
        price:'369kr'
    },
    {
        id: 3,
        name:"Gringo abc",
        price:'299kr'
    }
]

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavBar username={username} isAuthenticated={isAuthenticated} />
      <AppName />
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

function CoffeeList({coffees}){
    return (
        <ul>
        {coffees.forEach(coffee => {
            console.log(coffee);
            return <CoffeeView coffee={coffee} />
                })}
    </ul>)
}

function CoffeeView({coffee}) {
    return (
        <li><p>Name: {coffee.name}</p><p>Price: {coffee.price}</p></li>
    )
}

export default App;
