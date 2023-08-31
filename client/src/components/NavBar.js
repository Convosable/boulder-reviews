import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ setUser }) => {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if(r.ok) {
                setUser(null)
            }
        })
    }

    return (
        <div className = "navbar">
                <NavLink to = "/" exact = "true">Home</NavLink>
                <NavLink to = "/boulder_problems" exact = "true">Boulder Problems</NavLink>
                <button onClick = {handleLogout} >Logout</button>
        </div>
    )
    }

export default NavBar;