import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const NavBar = () => {

    const {setUser} = useContext(UserContext)

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
            <div>
                <NavLink to = "/" exact = "true">Home</NavLink>
                <NavLink to = "/reviews/new" exact = "true">New Review</NavLink>
                <button onClick = {handleLogout} >Logout</button>
            </div>
        </div>
    )
    }

export default NavBar;