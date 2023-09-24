import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { BoulderProblemContext } from '../context/BoulderProblemContext';

const NewReview = () => {

  const [date, setDate] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [boulderRating, setBoulderRating] = useState(0);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState("");

  const {user} = useContext(UserContext);
  const {boulderProblems, setBoulderProblems} = useContext(BoulderProblemContext);

  const {id} = useParams()
  const navigate = useNavigate();

  function createReview(e) {
    e.preventDefault()
    fetch(`/boulder_problems/${id}/reviews`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        completed: isComplete,
        boulder_rating: parseInt(boulderRating),
        notes: notes,
        user_id: user.id
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((review) => {
          console.log(review);
          handleNewReview(review)});
        navigate(`/boulder_problems/${id}`)
      } else {
        r.json().then((errors) => setErrors(errors.errors));
      }
    })
  }

  function handleNewReview(newReview) {
    const updatedProblems = boulderProblems.map((problem) => {
      if (problem.id === boulderProblem.id) {
        return {...problem, number_of_ascents: newReview.boulder_problem.number_of_ascents ,average_boulder_rating: newReview.boulder_problem.average_boulder_rating, reviews: [...problem.reviews, newReview]}
      }
      return problem
    })
    setBoulderProblems(updatedProblems);
  }

  const boulderProblem = boulderProblems?.find(prob => prob.id === parseInt(id))

  return (
    <div className='new-climbing-session-form'>
      {boulderProblem ?  <h1>New Review: {boulderProblem.name} - V{boulderProblem.grade}</h1> : null}
     
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
      {errors.length > 0 ? (
                <div>
                    {errors.map((error) => (
                        <li key={error}>
                            {error}
                        </li>
                    ))}
                </div>
            ) : null}
    </div>
  )
}

export default NewReview;