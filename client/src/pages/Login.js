import React from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const Login = ({ setUser }) => {
  return (
    <div>
        <LoginForm setUser = {setUser} />
        <SignUpForm setUser = {setUser}/>
    </div>
  )
}

export default Login;