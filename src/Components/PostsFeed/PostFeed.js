import React,{useState} from 'react'
import './PostFeed.css'
import Post from '../Post/Post'
let content='Write new post'
function PostFeed(props) {
  const [isPosting, setIsPosting] = useState('none')
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
const handlePosting=(event)=>{
  event.preventDefault()
  if(isPosting==='none'){setIsPosting('block'); content='Stop posting'} else {setIsPosting('none'); content='Write new post'}
}
const handleSubmit=(event)=>{
event.preventDefault()
console.log(event.target.querySelector('textarea').value)
props.addNewPost(props.loggedVia.name, props.loggedVia.surname,event.target.querySelector('textarea').value,incrementPost(),props.loggedVia.login)
}
  return(
    
    <div className="post-feed">
      <div className="post-sumbit-area">
        <button onClick={handlePosting}>{content}</button>
        <form style={{display: isPosting}} onSubmit={handleSubmit}>
          <textarea className="area-for-adding-post"></textarea>
          <div className="post-sumbit-button-area">
          <button type='submit' className="post-sumbit-button">Sumbit Post</button>
          </div>
        </form>
      </div>
      {
      props.posts.map((post)=>{ if(post.login===props.loggedVia.login)
            return < Post ava={props.loggedVia.ava} id={post.id} login={post.login} isliked={post.isliked} name={post.name} surname={post.surname} content={post.content}  plusLike={props.plusLike} />
        })}
    </div>
  )
}

export default PostFeed