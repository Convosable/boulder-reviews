import React, {useState} from 'react'
import BoulderProblemCard from './BoulderProblemCard';
import { Link } from 'react-router-dom'

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
            <div className='boulder-problem-container'>
                <h1>Boulder Problems</h1>
                {filterBySearch?.map((problem) => (
                    <BoulderProblemCard problem = {problem}/>
                ))}
            </div>
        </div>    
    )
}

export default BoulderProblems;