import React from 'react'

const ClimbingSessionCard = ({session}) => {

    const boulderProblem = session.boulder_problem
    const starRating = "⭐".repeat(boulderProblem.rating);


  return (
    <div className='boulder-problem-card'>
        <h1>Date: {session.date}</h1>
        <h2>{boulderProblem.name} - V{boulderProblem.grade} {starRating}</h2>
        <img src={boulderProblem.image_url} alt={boulderProblem.name} />
        <h3>Notes: {session.notes}</h3>
        <h3>Personal Rating: {"⭐".repeat(session.boulder_rating)}</h3>
    </div>
  )
}

export default ClimbingSessionCard;
