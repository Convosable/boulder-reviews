import React, { useState, useEffect } from 'react'
import BoulderProblemCard from './BoulderProblemCard';

const BoulderProblems = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [boulderProblems, setBoulderProblems] = useState(null)


    useEffect(() => {
        fetch("/boulder_problems")
        .then((r) => {
          if (r.ok) {
            r.json()
            .then((boulder_problems) => {
                setBoulderProblems(boulder_problems)
                setIsLoading(false)
            });
          }
        })
      }, []);

      const allBoulderProblems = boulderProblems?.map((problem) => {
        return <BoulderProblemCard key = {problem.id} problem = {problem}/>
      })

      if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
        <h1>Boulder Problems</h1>
        {allBoulderProblems}
    </div>
  )
}

export default BoulderProblems;