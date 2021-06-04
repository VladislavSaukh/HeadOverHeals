import React,{useState} from 'react';
import './LogIn.css'
import SignUp from "../SignUp/SignUp";

function LogIn(props){
    const [isRegistration, setIsRegistration] = useState(false)
    const changeRegisStatus = (event) =>{
        event.preventDefault()
        setIsRegistration(!isRegistration)
    }
    const handleSubmit=(event)=>{
        const login = event.target.querySelector("input[type='text']").value;
        const password = event.target.querySelector("input[type='password']").value;
        props.checkLogin(login,password);
    }
    return (
        isRegistration ? < SignUp  changeRegisStatus={changeRegisStatus} addUser={props.addUser}/> :
        <div className='login'>
            <div className='frame-login'>
            <h2>Welcome to the Head Over Heals</h2>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Input your login'/>
        <input type='password' placeholder='Input your password'/>
            <div className='inputL'>
        <button type='submit' className='button-logggg'>Log in</button>
        <button className='button-logggg' onClick={changeRegisStatus} >Sign Up</button>
            </div>
        </form>
            </div>
        </div>
    )
}

export default LogIn;