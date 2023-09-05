import React, { useState, useEffect } from 'react'

const ClimbingSessions = () => {

    const [climbingSessions, setClimbingSessions] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch('/climbing_sessions')
        .then((r) => {
            if(r.ok) {
                r.json().then(sesh => setClimbingSessions(sesh));
            } else {
                r.json().then(error => setError(error.errors));
            } 
        })
    }, [])

    const allSessions = climbingSessions?.map(session => {
        return session.notes
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