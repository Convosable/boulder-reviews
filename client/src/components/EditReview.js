import React, {useState} from 'react'

const EditReview = ({ rev, boulderProblem, handleReviewEdit }) => {
    
    const [date, setDate] = useState(rev.date);
    const [isComplete, setIsComplete] = useState(rev.completed);
    const [boulderRating, setBoulderRating] = useState(rev.boulder_rating); 
    const [notes, setNotes] = useState(rev.notes);
    const [errors, setErrors] = useState(false);

    function editReview(e) {
        e.preventDefault();
        fetch(`/reviews/${rev.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: date,
                completed: isComplete,
                boulder_rating: parseInt(boulderRating),
                notes: notes
            })
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(rev => handleReviewEdit(rev));
            } else {
                r.json().then(error => setErrors(error.errors));
            }
        })
    }

    return (
    <div>
      <form onSubmit={editReview}>
        <label>Date:</label>
        <input 
          type = "date"
          value = {date}
          name='date' 
          onChange = {(e) => setDate(e.target.value)}  
        /> <br></br>
        <label>Complete:</label>
        <input 
          type = "checkbox"
          // nneed to adjust this so its auto checked when form is filled
          name='isComplete'
          checked={isComplete}
          onChange = {(e) => setIsComplete(!isComplete)}   
        /> <br></br>
        <label>Boulder Rating:</label>
        <select 
          value = {boulderRating} 
          name='boulderRating'
          onChange = {(e) => setBoulderRating(e.target.value)}
        >
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
          name='notes'
          onChange = {(e) => setNotes(e.target.value)}  
        /> <br></br>
        <input type = "submit" value="Create Session!" />
      </form>
      {errors}
    </div>
  )
}

export default EditReview;