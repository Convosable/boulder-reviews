import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Login = ({ setUser }) => {
  return (
    <div>
        <LoginForm setUser = {setUser} />
        <SignUpForm setUser = {setUser}/>
    </div>
  )
}

export default Login;