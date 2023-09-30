import React from 'react'

const BoulderProblemCard = ({problem}) => {

    const {name, grade, image_url} = problem

    return (
        <div className='boulder-problem-card'>
            <img src={image_url} alt={name} />
            <h1>{name} - V{grade}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>{problem.reviews.length > 0 ? problem.average_boulder_rating + "⭐" : "Unrated "}</h2>
                    <p>from {problem.reviews.length} {problem.reviews.length === 1 ? "review" : "reviews"}</p>
            </div>
        </div>
    )
}

export default BoulderProblemCard;