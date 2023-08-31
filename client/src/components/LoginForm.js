import React, { useState } from 'react'

const LoginForm = ({ setUser }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((error) => console.log(error.errors))
                //need to show error message on DOM
            }
        })  
    }

  return (
    <div onSubmit = {handleSubmit}>
        <h1>LoginForm</h1>
        <form>
            <label>Username: </label>
            <input 
                type="text" 
                name="username" 
                value={username} 
                onChange = {(e) => setUsername(e.target.value)} 
            /> <br></br>
            <label>Password: </label>
            <input 
                type="text" 
                name="password" 
                value={password} 
                onChange = {(e) => setPassword(e.target.value)}
            /> <br></br>
            <input type="submit" value="Log In"/>
        </form>
    </div>
  )
}

export default LoginForm;