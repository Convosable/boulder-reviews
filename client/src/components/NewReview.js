import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const NewReview = ({ boulderProblems, userId }) => {

  const [date, setDate] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [boulderRating, setBoulderRating] = useState(0)
  const [notes, setNotes] = useState("")
  const [boulderProblem, setBoulderProblem] = useState("")
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")


  const navigate = useNavigate();


    //need to update boudlerProblem.reviews once session is created??

  function handleCreateReview(e) {
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
        user_id: userId,
        boulder_problem_id: boulderProblem.id
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log(data));
        navigate(`/boulder_problems/${boulderProblem.id}`)
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
      <h1>New Review</h1>


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


      <form onSubmit={handleCreateReview}>
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