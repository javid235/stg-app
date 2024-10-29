import React, { useState } from 'react'
import './CSS/Account.css'

const Account = () => {

  const [account, setAccount]= useState("Login")

  const changeHandler = ()=>{
    if (account === 'Sign Up') {
      setAccount('Login')
    } else {
      setAccount('Sign Up')
    }
  }
  return (
    <div className='acc-logsign-main'>
      <div className='acc-logsign-cont'>
        {account === 'Sign Up'?<h1>CREATE ACCOUNT</h1>:<h1>LOGIN</h1>}
        {account === 'Sign Up'?<input type='text' placeholder='Full Name' />:<></>}
        {account === 'Sign Up'?<input type='text' placeholder='User Name' />:<></>}
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        {account === 'Sign Up'?<input type='password' placeholder='Confirm Password' /> :<></>}
        
        <div className='acc-btn-cont'>
          {account === 'Sign Up'?<button className='acc-signup'>Sign Up</button>:<button className='acc-signup'>Login</button>}
        </div>
        <div className='acc-alr-login'>
          {account === 'Sign Up'?<p>Already have an account? <span className='alr-login-btn' onClick={()=>{changeHandler()}}>Log in</span></p>:<p>Create a Account? <span className='alr-login-btn' onClick={()=>{changeHandler()}}>click Here</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Account