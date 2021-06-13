import React from 'react'
import './Post.css'
import Image from '../Content/Elon.jpg'
import { FcLike } from "react-icons/fc";
import { BsFillHeartFill } from "react-icons/bs";

function Post(props) {
  const handleClick=(event)=>{
    event.preventDefault()
    const login = props.login;
    const id = props.id;
    props.plusLike(login,id)
    console.log(props.isliked)
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
var currentdate = new Date();
let xz ;
if(currentdate.getMinutes()<10){xz='0'} else {xz=''}
var datetime = + currentdate.getHours() + ":" +xz +  currentdate.getMinutes() 
  return(
    <div className="post">
     <div className="post-header">
         <div className="post-img">
          <img src={Image} alt="Avatar" />
         </div>
         <div className="post-info">
             <h3>{props.name} {props.surname}</h3>
             <h3>{today}</h3>
             <h3>{datetime}</h3>
         </div>
     </div>
     <div className="post-body">
         <p>{props.content}</p>
     </div>
     <div className="post-footer">
      <button type="button" className="like" onClick={handleClick}> { props.isliked? <FcLike style={{fontSize: '50px' }}  /> : <BsFillHeartFill style={{fontSize: '50px' }} />  }</button>
     </div>
    </div>
  )
}

export default Post