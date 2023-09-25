import React, { useContext} from 'react'
import { UserContext } from '../context/UserContext';
import { BoulderProblemContext } from '../context/BoulderProblemContext';
import { Link } from 'react-router-dom'

const Profile = () => {

    const {user} = useContext(UserContext);
    const {boulderProblems} = useContext(BoulderProblemContext);

    // const cmToFeet = (user.height * 0.0328084)
    // const userHeight = cmToFeet.toFixed(2)

    const projects = boulderProblems.filter((problem) => {
        if (problem.reviews && problem.reviews.length > 0) {
            const userReview = problem.reviews.find((review) => review.username === user.username)
            if (userReview) {
                return userReview.completed === false;
            }
        }
        return false // or message "No projects found" in a ternary to render below
    })

    console.log("proj",projects)

    const completedProblems = boulderProblems.filter((problem) => {
        if (problem.reviews && problem.reviews.length > 0) {
            const userReview = problem.reviews.find((review) => review.username === user.username)
            if (userReview) {
                return userReview.completed === true;
            }
        }
        return false
    })

    console.log("completed", completedProblems)


  return (
    <div>
        <h1>{user.name} // @{user.username}</h1>
        <img src={user.image_url} alt={user.username} />
        <h3>Height: {user.height} cm</h3>
        <h3>Weight: {user.weight} lbs</h3>
        <h3>Experience: {user.experience}</h3>
        <div className='user-boulder-problems'>
            <div className='projects-section'>
                <h3>Projects:</h3>
                {projects.map((problem) =>
                    <div key={problem.id}>
                        <Link to={`/boulder_problems/${problem.id}`}>
                            <h1>{problem.name} - V{problem.grade}</h1>
                        </Link>
                    </div>
                )}
            </div>
            <div className='completed-section'>
                <h3>Completed:</h3>
                {completedProblems.map((problem) =>
                    <div key={problem.id}>
                        <Link to={`/boulder_problems/${problem.id}`}>
                            <h1>{problem.name} - V{problem.grade}</h1>
                        </Link>
                    </div>
                )}
            </div>

        </div>  
    </div>
  )
}

export default Profile;