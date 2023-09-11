import React from 'react'

const BoulderProblemCard = ({problem}) => {

    const {name, grade, image_url} = problem

    // const starRating = "⭐".repeat(rating);

    const sum = problem.reviews.reduce((accumulator, review) => {
        return accumulator + review.boulder_rating
    },0);
    const averageRating = sum/problem.reviews.length;

    return (
        <div className='boulder-problem-card'>
            <img src={image_url} alt={name} />
            <h1>{name}</h1>
            <h2>V{grade} - {problem.reviews.length > 0 ? averageRating : "Unrated"}⭐</h2>
        </div>
    )
}

export default BoulderProblemCard;