import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, setUser }) => {

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
            <div className='navbar-left'>
                <NavLink to = "/" exact = "true">Home</NavLink>
                <NavLink to = "/climbing_sessions/new" exact = "true">Create Climbing Session</NavLink>
            </div>
            <div className='navbar-right'>
                <h4>{user.name}</h4>
                <img src = {user.image_url} alt = {user.name} />
                <button onClick = {handleLogout} >Logout</button>
            </div>
        </div>
    )
    }

export default NavBar;