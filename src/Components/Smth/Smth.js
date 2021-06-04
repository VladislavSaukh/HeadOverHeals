import Profile from "../Profile/Profile";
import './Smth.css';
import NewsFeed from '../NewsFeed/NewsFeed'
import React,{useState,useEffect} from 'react'
import MyPosts from "../MyPosts/MyPosts";

function Smth() {
    const [posts, setPosts] = useState([{name: 'Vladislav', surname:'Saukh', content:'Some content', id:0, likes:2, login:'kek'},
        {name: 'Elon', surname:'Musk', content:'Such a nice work', likes:0, id:0, login: 'elon'}])
    const [loggedVia, setLoggedVia]=useState({name: 'Vladislav', surname:'Saukh', login:'kek', ava: "../Images/img.png"})
    const [isNewsFeed, setIsNewsFeed]=useState(true)
    const [renderedPosts, setRenderedPosts]= useState(posts)
    const changeIsNewsFeedToFalse=(event)=>{
        event.preventDefault()
        setIsNewsFeed(false)
    }
    const changeIsNewsFeedToTrue=(event)=>{
        event.preventDefault()
        setIsNewsFeed(true)
    }
    const addNewPost =(name,surname,content,id,login)=>{
        const newPost ={
            name: name,
            surname: surname,
            content: content,
            id: id,
            likes:0,
            login: login
        }
        setPosts([newPost,...posts])
    }
    const plusLike =(login, id)=>{
         let likedPost=posts.findIndex((post)=>{
            return login===post.login && id===post.id})
        setPosts(posts.map((post)=>{
            console.log(post)
            if(post===posts[likedPost]) {return {name: posts[likedPost].name,surname: posts[likedPost].surname,content: posts[likedPost].content,id: posts[likedPost].id,likes: posts[likedPost].likes+1,login: posts[likedPost].login}} else
            {return post }
    }))
}

  return (
      <div>
    <div className='social'>
        <div className='buttonForChangeMainOfSocial'>
            <button onClick={changeIsNewsFeedToTrue} className='changeSocialButton'>Profile</button>
            <button onClick={changeIsNewsFeedToFalse} className='changeSocialButton'>News Feed</button>
        </div>
        <div className='MainOfSocial'>
            {isNewsFeed ? < Profile addNewPost={addNewPost} plusLike={plusLike} loggedVia={loggedVia} posts={posts}  /> :
                <NewsFeed posts={posts} loggedVia={loggedVia} addNewPost={addNewPost} plusLike={plusLike} />   }
        </div>
    </div>
      </div>
  );
}

export default Smth;
