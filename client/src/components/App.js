import '../App.css';
import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import { Routes, Route } from 'react-router-dom';
import BoulderProblems from "../pages/BoulderProblems";
import NewReview from './NewReview';
import BoudlerProblemDetails from '../pages/BoudlerProblemDetails';
import { UserContext } from '../context/UserContext';
import { BoulderProblemProvider } from '../context/BoulderProblemContext';

// need to update the readMe --- create boulders(no database of all boudlers) only the ones the  user creates


function App() {

  const {user} = useContext(UserContext)
  
  if (!user) return <Login />;

  return (    
    <div className="App">
      <h1>Welcome, {user.name}!</h1>
        <BoulderProblemProvider>
          <NavBar />
            <Routes>
              <Route path="/" element={<BoulderProblems />} />
              <Route path="/boulder_problems/:id/reviews/new" element={<NewReview userId = {user.id} />} />
              <Route path="/boulder_problems/:id" element={<BoudlerProblemDetails />} />
            </Routes>
        </BoulderProblemProvider>
    </div>
  );
}

export default App;
