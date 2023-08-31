import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import { Routes, Route } from 'react-router-dom';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser = {setUser}/>;
  console.log(user)

  return (    
    <div className="App">
      <h1>Welcome, {user.name}!</h1>
      <NavBar setUser = {setUser}/>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
