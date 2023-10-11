import React, { useContext} from 'react'
import { UserContext } from '../context/UserContext';
import { BoulderProblemContext } from '../context/BoulderProblemContext';
import { Link } from 'react-router-dom'

const Profile = () => {

    const {user} = useContext(UserContext);
    const {boulderProblems} = useContext(BoulderProblemContext);

    const completedClimbs = boulderProblems.filter(problem => {
        const userClimbs = user.climb_complete.map(climb => climb.boulder_problem_id)
        return userClimbs.includes(problem.id)
    })

    const incompletedClimbs = boulderProblems.filter(problem => {
        const userClimbs = user.climb_incomplete.map(climb => climb.boulder_problem_id)
        return userClimbs.includes(problem.id)
    })

  return (
    <div>
        <h1>{user.name} / / @{user.username}</h1>
        <img src={user.image_url} alt={user.username} />
        <h3>Height: {user.height} cm</h3>
        <h3>Weight: {user.weight} lbs</h3>
        <h3>Experience: {user.experience}</h3>
        <div className='user-boulder-problems'>
            <div className='projects-section'>
                <h3>Projects:</h3>
                {incompletedClimbs.map((problem) =>
                    <div key={problem.id}>
                        <Link to={`/boulder_problems/${problem.id}`}>
                            <h1>{problem.name} - V{problem.grade}</h1>
                        </Link>
                    </div>
                )}
            </div>
            <div className='completed-section'>
                <h3>Completed:</h3>
                {completedClimbs.map((problem) =>
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