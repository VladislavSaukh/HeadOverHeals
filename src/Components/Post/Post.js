import React from "react";
import './Post.css'

function Post (props){
    const handleClick=(event)=>{
        event.preventDefault()
        const login = props.login;
        const id = props.id;
        props.plusLike(login,id)

    }
    return(
        <div className='post'>
            <div className='postHeader'>
        <h3>{props.name}</h3>
        <h3>{props.surname}:</h3>
            </div>
            <p>{props.content}</p>
            <button onClick={handleClick}>likes:{props.likes}</button>
        </div>
    )

}

export default Post;
