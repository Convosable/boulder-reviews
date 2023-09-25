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
import Profile from '../pages/Profile';

// need to update the readMe

function App() {

  const {user} = useContext(UserContext)
  
  if (!user) return <Login />;

  return (    
    <div className="App">
        <BoulderProblemProvider>
          <NavBar />
            <Routes>
              <Route path="/" element={<BoulderProblems />} />
              <Route path="/boulder_problems/:id/reviews/new" element={<NewReview />} />
              <Route path="/boulder_problems/:id" element={<BoudlerProblemDetails />} />
              <Route path="/boulder_problems/new" element={<NewBoulderProblem />} />
              <Route path={`/${user.username}`} element={<Profile />} />
            </Routes>
        </BoulderProblemProvider>
    </div>
  );
}

export default App;


//build a user profile page that shows all of current users completed climbs or current projects??
// dont show duplicates 
//state managment implications fo rhaving a review  add or remove to boudler problem 