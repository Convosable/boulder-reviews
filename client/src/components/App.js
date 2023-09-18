import '../App.css';
import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { BoulderProblemProvider } from '../context/BoulderProblemContext';
import NavBar from "./NavBar";
import Login from "../pages/Login";
import BoulderProblems from "../pages/BoulderProblems";
import NewReview from './NewReview';
import BoudlerProblemDetails from '../pages/BoudlerProblemDetails';
import NewBoulderProblem from '../pages/NewBoulderProblem';

// need to update the readMe

function App() {

  const {user} = useContext(UserContext)
  
  if (!user) return <Login />;

  return (    
    <div className="App">
        <BoulderProblemProvider>
          <NavBar />
            <h1>Welcome, {user.name}!</h1>
            <Routes>
              <Route path="/" element={<BoulderProblems />} />
              <Route path="/boulder_problems/:id/reviews/new" element={<NewReview />} />
              <Route path="/boulder_problems/:id" element={<BoudlerProblemDetails />} />
              <Route path="/boulder_problems/new" element={<NewBoulderProblem />} />
            </Routes>
        </BoulderProblemProvider>
    </div>
  );
}

export default App;
