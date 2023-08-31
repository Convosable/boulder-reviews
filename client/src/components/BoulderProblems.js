import React, { useState, useEffect } from 'react'

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

      if (isLoading) return <h1>Loading...</h1>

  return (
    <div>BoulderProblems</div>
  )
}

export default BoulderProblems;