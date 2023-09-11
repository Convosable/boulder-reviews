import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const BoudlerProblemDetails = ({boulderProblems}) => {

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

    const { name, grade, location, description, image_url, rating} = boulderProblem
    console.log(boulderProblem)
  return (
    <div>
        <div>
            <h1>{name} - V{grade}</h1>
            <h2>⭐ {rating}</h2>
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