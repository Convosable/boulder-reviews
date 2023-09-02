import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const NewClimbingSession = ({ boulderProblems, userId }) => {

  const [date, setDate] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [boulderRating, setBoulderRating] = useState(0)
  const [notes, setNotes] = useState("")
  const [boulderProblem, setBoulderProblem] = useState("")
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")


  function handleCreateSession(e) {
    e.preventDefault()
    fetch('/climbing_sessions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        private: isPrivate,
        completed: isComplete,
        boulder_rating: boulderRating,
        notes: notes,
        user_id: userId,
        boulder_problem_id: boulderProblem.id
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log(data));
      } else {
        r.json().then((error) => setError(error.errors));
      }
    })
  }

  const filterBySearch = boulderProblems?.filter(problem => {
      return problem.name.toLowerCase().includes(search.toLowerCase())
  })

  function handleBoudlerProblemClick(problem) {
    setBoulderProblem(problem)
    setSearch(problem.name)
  }

  return (
    <div className='new-climbing-session-form'>
      <h1>New Climbing Session</h1>


      <h3>Search for Boulder Problem:</h3>
            <input type='text' value = {search} onChange={ (e) => setSearch(e.target.value)} />
            <div className='boulder-problem-container'>
                <h1>Boulder Problems</h1>
                {filterBySearch?.map((problem) => (
                  <div key = {problem.id} onClick = {() => handleBoudlerProblemClick(problem)} className="boulder-info-short">
                    <h3> {problem.name} - V{problem.grade} {"⭐".repeat(problem.rating)}</h3>
                  </div>
                ))}
            </div>


      <form onSubmit={handleCreateSession}>
        <label>Date:</label>
        <input 
          type = "date"
          value = {date} 
          onChange = {(e) => setDate(e.target.value)}  
        /> <br></br>
        <label>Private:</label>
        <input 
          type = "checkbox"
          value = {isPrivate} 
          onChange = {(e) => setIsPrivate(e.target.checked)}   
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

export default NewClimbingSession;