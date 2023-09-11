import '../App.css';
import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import { Routes, Route } from 'react-router-dom';
import BoulderProblems from "../pages/BoulderProblems";
import NewReview from './NewReview';
import BoudlerProblemDetails from '../pages/BoudlerProblemDetails';
import { UserContext } from '../context/UserContext';

// need to update the readMe --- create boulders(no database of all boudlers) only the ones the  user creates


function App() {

  const {user} = useContext(UserContext)

  const [boulderProblems, setBoulderProblems] = useState(null)

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

  function handleReviewDelete(revId, boulderProblemId) {
    console.log(revId)
    console.log(boulderProblemId)
    const correctProblem = boulderProblems.map((problem) => {
      if (problem.id === parseInt(boulderProblemId)) {
        const updatedReviews = problem.reviews.filter((review) => review.id !== revId);
        return {...problem, reviews: updatedReviews}
      }
      return problem
    })
    setBoulderProblems(correctProblem)
  }
  
  if (!user) return <Login />;

  return (    
    <div className="App">
      <h1>Welcome, {user.name}!</h1>
      <NavBar />
        <Routes>
          <Route path="/" element={<BoulderProblems boulderProblems = {boulderProblems}/>} />
          <Route path="/reviews/new" element={<NewReview userId = {user.id} boulderProblems = {boulderProblems}/>} />
          <Route path="/boulder_problems/:id" element={<BoudlerProblemDetails boulderProblems = {boulderProblems} handleReviewDelete = {handleReviewDelete}/>} />
        </Routes>
    </div>
  );
}

export default App;
