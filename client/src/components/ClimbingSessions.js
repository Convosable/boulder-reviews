import React, { useState, useEffect } from 'react'
import ClimbingSessionCard from './ClimbingSessionCard'

const ClimbingSessions = () => {

    const [climbingSessions, setClimbingSessions] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch('/climbing_sessions')
        .then((r) => {
            if(r.ok) {
                r.json().then(sesh => {
                    setClimbingSessions(sesh)
                    console.log(sesh)
                });
            } else {
                r.json().then(error => setError(error.errors));
            } 
        })
    }, [])

    const allSessions = climbingSessions?.map(session => {
        return <ClimbingSessionCard key = {session.id} session = {session}/>
    })

    if(!climbingSessions) return <h1>Loading...</h1>

  return (
    
    <div>ClimbingSessions
        <h1>Climbing Sessions</h1>
        <p>{error}</p>
        {allSessions}
    </div>
  )
}

export default ClimbingSessions;