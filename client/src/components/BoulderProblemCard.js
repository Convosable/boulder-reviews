import React from 'react'

const BoulderProblemCard = ({problem}) => {

    const {name, grade, description, image_url, location, rating} = problem

    const starRating = "⭐".repeat(rating);

    return (
        <div className='boulder-problem-card'>
            <h1>{name} - V{grade} {starRating}</h1>
            <img src={image_url} alt={name} />
            <p>{description}</p>
            <p>📍{location}</p>
        </div>
    )
}

export default BoulderProblemCard;