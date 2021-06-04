import React,{useState} from "react";
import Post from '../Post/Post'
function NewsFeed(props){

    return(
        props.posts.map((post)=>{ if(post.login!==props.loggedVia.login)
            return < Post addNewPost={props.addNewPost} id={post.id} login={post.login} name={post.name} surname={post.surname} content={post.content}  plusLike={props.plusLike}  likes={post.likes}/>
        })
    )
}
export default NewsFeed;