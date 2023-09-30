import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

const SignUpForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [experience, setExperience] = useState("")
    const [errors, setErrors] = useState("")

    const {setUser} = useContext(UserContext)


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
                    password_confirmation: passwordConfirmation,
                    name: name,
                    image_url: imageUrl,
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
                    r.json().then((errors) => setErrors(errors.errors))
                }
            })
    }

    return (
        <div>
            <h1>Signup:</h1>
            <form onSubmit = {handleSignup}>
                <label>Username: </label>
                <input 
                    type = "text" 
                    name = "username" 
                    value = {username} 
                    onChange = {(e) => setUsername(e.target.value)} 
                /> <br></br>

                <label>Password: </label>
                <input 
                    type = "password"
                    name = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                /> <br></br>

                <label>Password Confirmation: </label>
                <input 
                    type = "password"
                    name = "passwordConfirmation"
                    value = {passwordConfirmation}
                    onChange = {(e) => setPasswordConfirmation(e.target.value)} 
                /> <br></br>

                <label>Name: </label>
                <input 
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)} 
                /> <br></br>

                <label>Profile Picture: </label>
                <input 
                    type = "text"
                    name = "imageUrl"
                    value = {imageUrl}
                    onChange = {(e) => setImageUrl(e.target.value)} 
                /> <br></br>

                <label>Height: </label>
                <input 
                    type = "text"
                    name = "height"
                    value = {height}
                    onChange = {(e) => setHeight(e.target.value)} 
                />
                <label>cm</label> <br></br>

                <label>Weight: </label>
                <input 
                    type = "text"
                    name = "weight"
                    value = {weight}
                    onChange = {(e) => setWeight(e.target.value)} 
                />
                <label>lbs.</label> <br></br>

                <label>Experience: </label>
                <select value = {experience} onChange = {(e) => setExperience(e.target.value)}>
                    <option value="">Select Experience</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Elite">Elite</option>
                </select> <br></br>
                <input type="submit" value="Sign Up" />
            </form>
            {errors.length > 0 ? (
                <div>
                    {errors.map((error) => (
                        <li key={error}>
                            {error}
                        </li>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default SignUpForm;