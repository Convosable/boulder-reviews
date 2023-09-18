import React, {useContext, useState} from 'react'
import BoulderProblemCard from '../components/BoulderProblemCard';
import {Link} from 'react-router-dom';
import { BoulderProblemContext } from '../context/BoulderProblemContext';


const BoulderProblems = () => {
    
    const [search, setSearch] = useState("");
    const [grade, setGrade] = useState('All')
    const {boulderProblems} = useContext(BoulderProblemContext);

    const filterBySearch = boulderProblems?.filter(problem => {
        return problem.name.toLowerCase().includes(search.toLowerCase())
    })

    const masterFilter = filterBySearch.filter(problem => {
        console.log(problem)
        if (grade === "All") {
            return problem
        } else {
            return problem.grade === parseInt(grade);
        }
    })

    //add filter by rating as dropdown
        
    return (

        <div>
            <div className='boulder-problem-filters'>
                <span className='filter-label'>
                    Search for Boulder Problem:
                </span>
                <input 
                    type='text' 
                    value = {search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>
            <div className='boulder-problem-filters'>
                <span className='filter-label'>
                    Filter by grade:
                </span>
                <select 
                    value = {grade}
                    onChange = {(e) => setGrade(e.target.value)}>
                        <option value = 'All'>All</option>
                    {Array.from({ length: 18 }, (i, index) => (
                        <option key={index} value={index}>
                            V{index}
                        </option>
                    ))}
                </select> <br></br>
            </div>
                <h1>Boulder Problems</h1>
            <div className='boulder-problem-container'>
                {masterFilter?.map((problem) => (
                    <Link to={`/boulder_problems/${problem.id}`} key = {problem.id}>
                        <BoulderProblemCard problem = {problem}/>
                    </Link>
                ))}
            </div>
        </div>    
    )
}

export default BoulderProblems;