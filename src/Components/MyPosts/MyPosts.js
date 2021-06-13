import React from "react";
import Post from "../Post/Post"
import Profile from "../Profile/Profile";
function MyPosts(props){

    return(
        props.posts.map((post)=>{ if(post.login===props.loggedVia.login)
            return < Post ava={props.loggedVia.ava} id={post.id} login={post.login} likes={post.likes} name={post.name} surname={post.surname} content={post.content}  plusLike={props.plusLike} />
        })
    )
}
export default MyPosts;