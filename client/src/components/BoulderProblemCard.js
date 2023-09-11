import React from 'react'

const BoulderProblemCard = ({problem}) => {

    const {name, grade, image_url} = problem

    // const starRating = "⭐".repeat(rating);

    // change boulder problem rating to be handled in the backend

    console.log(problem.average_boulder_rating)

    return (
        <div className='boulder-problem-card'>
            <img src={image_url} alt={name} />
            <h1>{name}</h1>
            <h2>V{grade} - {problem.reviews.length > 0 ? problem.average_boulder_rating : "Unrated"}⭐</h2>
        </div>
    )
}

export default BoulderProblemCard;