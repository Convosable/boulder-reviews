import React from 'react'

const BoulderProblemCard = ({problem}) => {

    const {name, grade, description, image_url, location, rating} = problem

    const starRating = "⭐".repeat(rating);

    return (
        <div className='boulder-problem-card'>
            <img src={image_url} alt={name} />
            <h1>{name}</h1>
            <h2>V{grade} - ⭐ {rating}</h2>
        </div>
    )
}

export default BoulderProblemCard;