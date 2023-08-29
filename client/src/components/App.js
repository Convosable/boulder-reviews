import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import { Routes, Route } from 'react-router-dom';


function App() {

  const [user, setUser] = useState(null)


  if (!user) return <Login />;
  console.log(user)

  return (    
    <div className="App">
      <h1>Welcome, {user.name}!</h1>
      <NavBar />
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
