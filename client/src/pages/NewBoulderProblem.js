import React, { useState, useContext } from 'react'
import { BoulderProblemContext } from '../context/BoulderProblemContext'
import { useNavigate } from "react-router-dom";


const NewBoulderProblem = () => {

    // if user == admin, then allow edit to boulder

    const [name, setName] = useState("");
    const [grade, setGrade] = useState(0);
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState("");

    const {boulderProblems, setBoulderProblems} = useContext(BoulderProblemContext);
    const navigate = useNavigate();

    function handleNewBoulderSubmit(e) {
        e.preventDefault();
        fetch('/boulder_problems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                grade: grade,
                description: description,
                image_url: imageUrl,
                location: location
            })
        })
        .then((r) => {
            if(r.ok) {
                r.json().then((problem) => {
                    createBoulderProblem(problem)
                    navigate(`/boulder_problems/${problem.id}`)
                });
            } else {
                r.json().then((error) => setErrors(error.errors))
            }
        })
    }

    function createBoulderProblem(problem) {
        setBoulderProblems([...boulderProblems, problem])
    }

  return (
    <div>
        <form onSubmit={handleNewBoulderSubmit}>
            <label>Name:</label>
            <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br></br>
            <label>Grade:</label>
            <select 
                value = {grade}
                onChange = {(e) => setGrade(e.target.value)}>
                {Array.from({ length: 18 }, (i, index) => (
                    <option key={index} value={index}>
                        V{index}
                    </option>
                ))}
            </select> <br></br>
            <label>Description:</label>
            <input 
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /> <br></br>
            <label>Image:</label>
            <input 
                type='text'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            /> <br></br>
            <label>Location:</label>
            <input 
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            /> <br></br>
            <input 
                type='submit'
            /> <br></br>
            {/* {errors.length > 0 ? errors.join('. ') : null} */}
            {errors.length > 0 ? (
                <div>
                    {errors.map((error) => (
                        <span key={error}>
                            {error}
                            <br />
                        </span>
                    ))}
                </div>
            ) : null}
        </form>
    </div>
  )
}

export default NewBoulderProblem;