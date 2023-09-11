import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const BoudlerProblemDetails = () => {

    const [boulderProblem, setBoulderProblem] = useState(null)
    const [error, setError] = useState('')

    const {id} = useParams()

    useEffect(() => {
        fetch(`/boulder_problems/${id}`)
        .then((r) => {
            if(r.ok) {
                r.json().then((problem => setBoulderProblem(problem)))
            } else {
                r.json().then((error) => setError(error.errors))
            }
        })
    }, [])

    if(!boulderProblem) return <h1>Loading...</h1>

    const { name, grade, location, description, image_url} = boulderProblem
    console.log(boulderProblem)

    // add linnk for a new review?
    // add and edit button for the review( { @current user is true ? "show edit button" : "dont show})
    //same with a delete button

    //adds average for all ratings for boulder
    const sum = boulderProblem.reviews.reduce((accumulator, review) => {
        return accumulator + review.boulder_rating
    },0);
    const averageRating = sum/boulderProblem.reviews.length;
  return (
    <div>
        <div>
            <h1>{name} - V{grade}</h1>
            <h2>{boulderProblem.reviews.length > 0 ? averageRating : "Unrated"}</h2>
            <img src={image_url} alt={name} />
            <h3>{location}</h3>
            <p>{description}</p>
        </div>
        <Link to='/'>

        </Link>
        <div className = 'reviews-container'>
            {boulderProblem.reviews.map((rev) =>
            <div className='review-card' key = {rev.id}>
                <p>{rev.username}</p>
                <p>{rev.date}</p>
                Completed: {rev.completed ? '✅' : '❌'}
                <p>Rating: {rev.boulder_rating} </p>
                <p>Notes: {rev.notes}</p>

            </div>
            )}
        </div>
        
    </div>
  )
}

export default BoudlerProblemDetails;