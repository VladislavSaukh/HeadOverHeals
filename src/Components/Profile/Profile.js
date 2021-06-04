import React,{useState} from "react";
import MyPosts from "../MyPosts/MyPosts";
import NewsFeed from "../NewsFeed/NewsFeed";
import './Profile.css'

function Profile(props){
    let postsForMyProfile=props.posts.filter((post)=>{
        if(post.login===props.loggedVia.login){return post}
    })
    let max=0;
    const incrementPost =()=>{
        for(let i=0; i<postsForMyProfile.length;i++){
            if(postsForMyProfile[i].id>max){max=postsForMyProfile[i].id}
        }
        max++;
        return max;
    }
const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(event.target.querySelector('textarea').value)
    props.addNewPost(props.loggedVia.name, props.loggedVia.surname,event.target.querySelector('textarea').value,incrementPost(),props.loggedVia.login)
}
    return(
        <div className='profile'>
            <div className='mainPart'>
                <div className='profileInformation'>
            <div className='profIMG' />
            <h3>{props.loggedVia.name}</h3>
            <h3>{props.loggedVia.surname}</h3>
                </div>
                <div className='newPostInput'>
                    <form onSubmit={handleSubmit}>
                    <textarea className='pohui' rows='14' cols='40'/>
                    <button type='submit'>Add a new post</button>
                    </form>
                </div>
            </div>
            <MyPosts  posts={props.posts} plusLike={props.plusLike} loggedVia={props.loggedVia}  />
        </div>
    )
}

export default Profile;