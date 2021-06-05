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
                    <h3></h3>
                    <h2>Welcome to the</h2>
                    <h2>Head Over Heels</h2>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Phone or Email'/>
                        <input type='password' placeholder='Password'/>
                        <div className='inputL'>
                            <button type='submit' className='button-logggg'>Sign in</button>
                            <button className='button-logggg' onClick={changeRegisStatus} >Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default LogIn;