import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { BoulderProblemContext } from '../context/BoulderProblemContext'

const BoudlerProblemDetails = () => {

    const {id} = useParams()
    const {user} = useContext(UserContext)
    const {boulderProblems, setBoulderProblems} = useContext(BoulderProblemContext);


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
        // this works for updating statae, but the average rating doesnt update on the page
    }

    function handleReviewDelete(revId, boulderProblemId) {
        const correctProblem = boulderProblems.map((problem) => {
          if (problem.id === parseInt(boulderProblemId)) {
            const updatedReviews = problem.reviews.filter((review) => review.id !== revId);
            return {...problem, reviews: updatedReviews}
          }
          return problem
        })
        setBoulderProblems(correctProblem)
      }
    

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
        <Link to={`/boulder_problems/${id}/reviews/new`}>
            Click Me To Review
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