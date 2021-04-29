import React from 'react';
import './LogIn.css'

function LogIn(props){
    const handleSubmit=(event)=>{
        const login = event.target.querySelector("input[type='text']").value;
        const password = event.target.querySelector("input[type='password']").value;
        props.checkLogin(login,password);
    }
    return (
        <div className='login'>
            <div className='frame-login'>
            <h2>Welcome to the Head Over Heals</h2>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Input your login'/>
        <input type='password' placeholder='Input your password'/>
            <div className='inputL'>
        <button type='submit' id='button-logggg'>Log in</button>
            </div>
        </form>
            </div>
        </div>
    )
}

export default LogIn;