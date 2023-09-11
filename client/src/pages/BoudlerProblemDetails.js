import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const BoudlerProblemDetails = ({ boulderProblems, handleReviewDelete }) => {

    const {id} = useParams()
    const {user} = useContext(UserContext)

    const boulderProblem = boulderProblems?.find(problem => problem.id === parseInt(id));

    if(!boulderProblem) return <h1>Loading...</h1>

    const { name, grade, location, description, image_url, reviews, average_boulder_rating} = boulderProblem

    // add linnk for a new review?
    // add and edit button for the review( { @current user is true ? "show edit button" : "dont show})
    //same with a delete button

    function handleEdit(rev) {
        
    }
    
    function deleteReview(rev) {
        fetch(`/reviews/${rev.id}`, {
            method: 'DELETE',
        })
        .then(() => handleReviewDelete(rev.id, id));
    }
    

    //need to update state held for reviews on a boulder problem once deleted

    //need to figure out the edit dlete button to be handled in the backend

  return (
    <div>
        <div>
            <h1>{name} - V{grade}</h1>
            <h2>Average Rating: {reviews.length > 0 ? average_boulder_rating + "⭐" : "Unrated"}</h2>
            <img src={image_url} alt={name} />
            <h3>{location}</h3>
            <p>{description}</p>
        </div>
        <Link to='/'>

        </Link>
        <div className = 'reviews-container'>
            <h2>Reviews:</h2>
            {boulderProblem.reviews.map((rev) =>
            <div className='review-card' key = {rev.id}>
                <p>{rev.username}</p>
                <p>{rev.date}</p>
                Completed: {rev.completed ? '✅' : '❌'}
                <p>Rating: {rev.boulder_rating} ⭐ </p>
                <p>Notes: {rev.notes}</p>
                {rev.username === user.username ? <button onClick = {() => handleEdit(rev)}>Edit</button> : null }
                {rev.username === user.username ? <button onClick = {() => deleteReview(rev)}>Delete</button> : null }
            </div>
            )}
        </div>
        
    </div>
  )
}

export default BoudlerProblemDetails;