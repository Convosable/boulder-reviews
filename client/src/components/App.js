import '../App.css';
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import BoulderProblems from "./BoulderProblems";
import NewClimbingSession from './NewClimbingSession';

// need to update the readMe --- create boulders(no database of all boudlers) only the ones the  user creates


function App() {

  const [user, setUser] = useState(null)
  const [boulderProblems, setBoulderProblems] = useState(null)


  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/boulder_problems")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((boulder_problems) => {
            setBoulderProblems(boulder_problems)
        });
      }
    })
  }, []);

  if (!user) return <Login setUser = {setUser}/>;

  return (    
    <div className="App">
      <h1>Welcome, {user.name}!</h1>
      <NavBar user = {user} setUser = {setUser}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/boulder_problems" element={<BoulderProblems boulderProblems = {boulderProblems}/>} />
        <Route path="/climbing_sessions/new" element={<NewClimbingSession userId = {user.id} boulderProblems = {boulderProblems}/>} />
      </Routes>
    </div>
  );
}

export default App;
