import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { BoulderProblemContext } from '../context/BoulderProblemContext';

//add useContext to get rid of userId prop

const NewReview = ({ userId }) => {

  const [date, setDate] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [boulderRating, setBoulderRating] = useState(0)
  const [notes, setNotes] = useState("")
  const [error, setError] = useState("")

  const {boulderProblems, setBoulderProblems} = useContext(BoulderProblemContext);

  const {id} = useParams()
  const navigate = useNavigate();

  function createReview(e) {
    e.preventDefault()
    fetch('/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        completed: isComplete,
        boulder_rating: parseInt(boulderRating),
        notes: notes,
        boulder_problem_id: id,
        user_id: userId
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((review) => handleNewReview(review, id));
        navigate(`/boulder_problems/${id}`)
      } else {
        r.json().then((error) => setError(error.errors));
      }
    })
  }

  function handleNewReview(newReview, boulderProblemId) {
    const updatedProblems = boulderProblems.map((problem) => {
      if (problem.id === boulderProblemId) {
        return {...problem, reviews: [...problem.reviews, newReview]}
      }
      return problem
    })
    setBoulderProblems(updatedProblems);
  }


  const boulderProblem = boulderProblems?.find(prob => prob.id === parseInt(id))

  return (
    <div className='new-climbing-session-form'>
      <h1>New Review: {boulderProblem.name}</h1>

      <form onSubmit={createReview}>
        <label>Date:</label>
        <input 
          type = "date"
          value = {date} 
          onChange = {(e) => setDate(e.target.value)}  
        /> <br></br>
        <label>Complete:</label>
        <input 
          type = "checkbox"
          value = {isComplete} 
          onChange = {(e) => setIsComplete(e.target.checked)}  
        /> <br></br>
        <label>Boulder Rating:</label>
        <select value = {boulderRating} onChange = {(e) => setBoulderRating(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> <br></br>
        <label>Notes:</label>
        <input 
          type = "text"
          value = {notes} 
          onChange = {(e) => setNotes(e.target.value)}  
        /> <br></br>
        <input type = "submit" value="Create Session!" />
      </form>
      <h1>{error}</h1>
    </div>
  )
}

export default NewReview;