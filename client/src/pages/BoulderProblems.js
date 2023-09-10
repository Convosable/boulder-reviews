import React, {useState} from 'react'
import BoulderProblemCard from '../components/BoulderProblemCard';
import {Link} from 'react-router-dom';
const BoulderProblems = ({ boulderProblems }) => {
    
    const [search, setSearch] = useState("")

    const filterBySearch = boulderProblems?.filter(problem => {
        return problem.name.toLowerCase().includes(search.toLowerCase())
    })
    //add filter by grade as dropdown
    //add filter by rating as dropdown

    // add a new boulder problem form
    
    return (

        <div>
            <h3>Search for Boudler Problem:</h3>
            <input type='text' value = {search} onChange={ (e) => setSearch(e.target.value)} />
                <h1>Boulder Problems</h1>
            <div className='boulder-problem-container'>
                {filterBySearch?.map((problem) => (
                    <Link to={`/boulder_problems/${problem.id}`} key = {problem.id}>
                        <BoulderProblemCard problem = {problem}/>
                    </Link>
                ))}
            </div>
        </div>    
    )
}

export default BoulderProblems;