import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { BoulderProblemContext } from '../context/BoulderProblemContext'

const BoudlerProblemDetails = () => {

    const [error, setError] = useState('')

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
        .then(() => handleReviewDelete(rev));
        // this works for updating statae, but the average rating doesnt update on the page, only updates when it switches from a number to unrated
    }


    // is this condition good practice? Im not sure how to render an error message since i dont get back a json response
    // also using a condition like this prevents the review from being removed from state held in boulderProblems.reviews
    function handleReviewDelete(rev) {
        if(user.username === rev.username) {
            const correctProblem = boulderProblems.map((problem) => {
              if (problem.id === parseInt(id)) {
                const updatedReviews = problem.reviews.filter((review) => review.id !== rev.id);
                return {...problem, reviews: updatedReviews}
              }
              return problem
            })
            setBoulderProblems(correctProblem)
        } else {
            return setError("Unauthorized. Review must belong to the current user to make changes or delete.")
        }
      }
    
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
            Add a Review
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

                {/* <button onClick = {() => handleEdit(rev)}>Edit</button>
                <button onClick = {() => deleteReview(rev)}>Delete</button> <br></br> */}
                {error}
            </div>
            )}
        </div>
        
    </div>
  )
}

export default BoudlerProblemDetails;

// Note: a user should only be able to edit and delete resources if they are logged in and the creator of that resource. For example, if we consider the example described below with models of User, DogHouse, and Review, I would only be able to edit or delete the reviews that I created. This protection should occur in the back end of the project. Simply altering the front end to hide the edit & delete buttons is insufficient in terms of security. Assuming you have a current_user method and a post belongs to a user, the code needed to secure these operations looks something like this: if current_user.id == post.user.id.

// Alternatively, the most performant way to implement this is:

// post = current_user.posts.find(params[:id])
// if post
//   <do something>
// else
//   <do something else>
// end