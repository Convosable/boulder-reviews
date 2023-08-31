import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";


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

  return (    
    <div className="App">
      <h1>Welcome, {user.name}!</h1>
      <NavBar user = {user} setUser = {setUser}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/boulderproblems" element={<BoulderProblems />} /> */}
      </Routes>
    </div>
  );
}

export default App;
