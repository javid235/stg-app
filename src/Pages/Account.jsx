import React from 'react'
import './CSS/Account.css'

const Account = () => {
  return (
    <div className='acc-logsign-main'>
      <div className='acc-logsign-cont'>
        <h1>CREATE ACCOUNT</h1>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        {/* <input type='password' placeholder='Confirm Password' /> */}
        <div className='acc-btn-cont'>
          <button className='acc-signup'>Sign Up</button>
        </div>
        <div className='acc-alr-login'>
          Already have an account? <span className='alr-login-btn'>Log in</span>
        </div>
      </div>
    </div>
  )
}

export default Account