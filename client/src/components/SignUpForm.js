import React, { useState } from 'react'

const SignUpForm = ({ setUser }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [experience, setExperience] = useState("")
    const [error, setError] = useState("")

    // need to set up a password must match password confirmatino check...
    // maybe when making the fetch request to signup, if statement (password == passwordConfirmation), else throw error

    function handleSignup(e) {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                passwordConfirmation: passwordConfirmation,
                name: name,
                imageUrl: imageUrl,
                height: height,
                weight: weight,
                experience: experience
            })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            }
            else {
                r.json().then((error) => setError(error.errors))
            }
        })
    }

    return (
        <div>
            <h1>Signup Form</h1>
            <form onSubmit = {handleSignup}>
                <label>Username:</label>
                <input 
                    type = "text" 
                    name = "username" 
                    value = {username} 
                    onChange = {(e) => setUsername(e.target.value)} 
                /> <br></br>

                <label>Password:</label>
                <input 
                    type = "text"
                    name = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                /> <br></br>

                <label>Password Confirmation:</label>
                <input 
                    type = "text"
                    name = "passwordConfirmation"
                    value = {passwordConfirmation}
                    onChange = {(e) => setPasswordConfirmation(e.target.value)} 
                /> <br></br>

                <label>Name:</label>
                <input 
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)} 
                /> <br></br>

                <label>Profile Picture:</label>
                <input 
                    type = "text"
                    name = "imageUrl"
                    value = {imageUrl}
                    onChange = {(e) => setImageUrl(e.target.value)} 
                /> <br></br>

                <label>Height:</label>
                <input 
                    type = "text"
                    name = "height"
                    value = {height}
                    onChange = {(e) => setHeight(e.target.value)} 
                />
                <label>cm</label> <br></br>

                <label>Weight:</label>
                <input 
                    type = "text"
                    name = "weight"
                    value = {weight}
                    onChange = {(e) => setWeight(e.target.value)} 
                />
                <label>lbs.</label> <br></br>

                <label>Experience:</label>
                <input 
                    type = "text"
                    name = "experience"
                    value = {experience}
                    onChange = {(e) => setExperience(e.target.value)} 
                /> <br></br>

                <input type="submit" value="Sign Up" />
            </form>
            <h3>{error}</h3>
        </div>
    )
}

export default SignUpForm;