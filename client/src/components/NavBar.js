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
                <NavLink to = "/" exact = "true" className="navbar-link">Home</NavLink>
                <NavLink to = "/boulder_problems/new" exact = "true" className="navbar-link">New Boulder Problem</NavLink>
                <button onClick = {handleLogout} className="logout-button">Logout</button>
        </div>
    )
}

export default NavBar;