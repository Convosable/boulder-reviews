import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { BoulderProblemContext } from '../context/BoulderProblemContext'
import EditReview from '../components/EditReview'

const BoudlerProblemDetails = () => {

    const [showEditForm, setShowEditForm] = useState(false)

    const {user} = useContext(UserContext)
    const {id} = useParams()
    const {boulderProblems, setBoulderProblems} = useContext(BoulderProblemContext);
    

    const boulderProblem = boulderProblems?.find(problem => problem.id === parseInt(id));
    if(!boulderProblem) return <h1>Loading...</h1>

    const { name, grade, location, description, image_url, reviews, average_boulder_rating, number_of_ascents} = boulderProblem

    console.log(boulderProblem)

    
    function deleteReview(rev) {
        fetch(`/boulder_problems/${id}/reviews/${rev.id}`, {
            method: 'DELETE',
        })
        .then(() => handleReviewDelete(rev));
    }

    function handleReviewDelete(rev) {
            const updatedBoulderProblems = boulderProblems.map((problem) => {
                if (problem.id === parseInt(id)) {
                    const updatedReviews = problem.reviews.filter((review) => review.id !== rev.id);    
                    const newAverageRating = updatedReviews.reduce((sum, review) => sum + review.boulder_rating, 0) / updatedReviews.length;                    
                    const newAverageAscents = updatedReviews.filter((review) => review.completed).length;
                    return {...problem, average_boulder_rating: newAverageRating, number_of_ascents: newAverageAscents, reviews: updatedReviews}
                }
                return problem
            })
            setBoulderProblems(updatedBoulderProblems)
      }

    function handleReviewEdit(rev) {
        const updatedBoulderProblems = boulderProblems.map((problem) => {
            if (problem.id === parseInt(id)) {
                const updatedReviews = problem.reviews.map((review) => {
                    if (review.id === rev.id) {
                        return rev
                    }
                    return review
                });
                return {...problem, average_boulder_rating: rev.boulder_problem.average_boulder_rating, number_of_ascents: rev.boulder_problem.number_of_ascents, reviews: updatedReviews};
            }
            return problem;
        }) 
        setBoulderProblems(updatedBoulderProblems);
        setShowEditForm(false)
    }


  return (
    <div>
        <div className='boulder-problem-details'>
            <h1>{name} - V{grade}</h1>
            <h2>Average Rating: {reviews.length > 0 ? average_boulder_rating + "⭐" : "Unrated"}</h2>
            <h3>Ascents: {number_of_ascents}</h3>

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
                {rev.username === user.username ? <button onClick = {() => setShowEditForm(!showEditForm)}>Edit</button> : null }
                {rev.username === user.username ? <button onClick = {() => deleteReview(rev)}>Delete</button> : null }
                {rev.username === user.username && showEditForm ? <EditReview rev = {rev}  boulderProblem = {boulderProblem} handleReviewEdit = {handleReviewEdit}/> : null}
            </div>
            )}
        </div>
        
    </div>
  )
}

export default BoudlerProblemDetails;