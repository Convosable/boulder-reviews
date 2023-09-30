import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const Login = () => {

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <div className='login'>
        <LoginForm />
        <p>If you do not already have an account, click <button onClick = {() => setShowSignUp(!showSignUp)} >here</button> to sign up.</p>
        { showSignUp ? <SignUpForm /> : null }
      </div>
    </div>
  )
}

export default Login;