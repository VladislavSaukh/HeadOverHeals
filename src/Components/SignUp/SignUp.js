import React from 'react';
import './SignUp.css'

function SignUp(props){
    const handleSubmit =(event) =>{
        event.preventDefault();
        const login = event.target.querySelector("input[type='text']").value;
        const password = event.target.querySelector("input[type='password']").value;
        props.addUser(login,password)
    }
return(
    <div className='signUp'>
        <div className='frame-login'>
            <h2>Welcome to the Head Over Heals</h2>
            <form onSubmit={handleSubmit} >
                <input type='text' placeholder='Input your username'/>
                <input type='password' placeholder='Input your password'/>
                <input type='password' placeholder='Repeat your password'/>
                <div className='inputL'>
                    <button className='button-logggg' type='submit'>Sign up</button>
                    <button className='button-logggg' type='submit' onClick={props.changeRegisStatus}>Log in</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default SignUp