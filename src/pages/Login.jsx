import React from 'react'
import Add from "../img/addAvatar.png"

const Login = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className='logo'>Chatster</span>
                <span className='title'>Log In</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign In</button>
                </form>
                <p>Do you not have an account? Register</p>
            </div>
        </div>
    )
}

export default Login;