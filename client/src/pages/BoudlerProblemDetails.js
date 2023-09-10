import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

    const reviews = boulderProblem.climbing_sessions.map((sesh) => {
        return sesh.date
    })
  return (
    <div>
        <div>
            <h1>{name} - V{grade}</h1>
            <h2>⭐ {rating}</h2>
            <img src={image_url} alt={name} />
            <h3>{location}</h3>
            <p>{description}</p>
        </div>
        <div>
            {boulderProblem.climbing_sessions.map((sesh) =>
                <h2>{sesh.date}</h2>
            )}
        </div>
        
    </div>
  )
}

export default BoudlerProblemDetails;