import React,{useState} from 'react'
import UserInfo from '../UserInfo/UserInfo'
import './Smth.css'
import PostFeed from '../PostsFeed/PostFeed'
import Image from '../Content/Elon.jpg'
import NewsFeed from '../NewsFeed/NewsFeed'

function Smth() {
  const [posts, setPosts] = useState([{name: 'Vladislav', surname:'Saukh', content:'Some content', id:0, isliked:false, login:'kek'},
  {name: 'Elon', surname:'Musk', content:'Such a nice work', isliked: false, id:0, login: 'elon'}])
const [loggedVia, setLoggedVia]=useState({name: 'Vladislav', surname:'Saukh', login:'kek', ava: Image})
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
      isliked: false,
      login: login
  }
  setPosts([newPost,...posts])
}
const plusLike =(login, id)=>{
   let likedPost=posts.findIndex((post)=>{
      return login===post.login && id===post.id})
  setPosts(posts.map((post)=>{
      console.log(post)
      if(post===posts[likedPost]) {return {name: posts[likedPost].name,surname: posts[likedPost].surname,content: posts[likedPost].content,id: posts[likedPost].id,isliked: posts[likedPost].isliked? false: true,login: posts[likedPost].login}} else
      {return post }
}))
}

  return (
      <div className="frame-for-social">
    <div className='social'>
        <div className='buttonForChangeMainOfSocial'>
            <button onClick={changeIsNewsFeedToTrue} className='changeSocialButton'>Profile</button>
            <button onClick={changeIsNewsFeedToFalse} className='changeSocialButton'>News Feed</button>
        </div>
        <div className='MainOfSocial'>
            {isNewsFeed ? <div> 
            <UserInfo loggedVia={loggedVia}  />
            <PostFeed addNewPost={addNewPost} plusLike={plusLike} loggedVia={loggedVia} posts={posts} /> 
            </div> 
            :   
                <NewsFeed posts={posts} loggedVia={loggedVia} addNewPost={addNewPost} plusLike={plusLike} />   }
        </div>
    </div>
      </div>
  );
}

export default Smth;
