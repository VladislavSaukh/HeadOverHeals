import React,{useState} from "react";
import Post from '../Post/Post'
function NewsFeed(props){

    return(
        
        props.posts.map((post)=>{ if(post.login!==props.loggedVia.login)
            return < Post ava={props.loggedVia.ava} id={post.id} login={post.login} isliked={post.isliked} name={post.name} surname={post.surname} content={post.content}  plusLike={props.plusLike} />
        })
    )
}
export default NewsFeed;