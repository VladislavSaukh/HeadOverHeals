import React from 'react'
import './UserInfo.css'

function UserInfo(props) {
  return(

    <div className="user-info-section">
     <div className="user-img-section">
         <img src={props.loggedVia.ava} alt="Avatar" />
     </div>
     <div className="user-characteristics">
         <h3 className='imena'>{props.loggedVia.name} {props.loggedVia.surname}</h3>
         <h3>Status:</h3>
         <h3>Username:</h3>
         <h3>Mutual Friends:</h3>
         <h3>City:</h3>
         <h3>Age:</h3>
     </div>
    </div>
  )
}

export default UserInfo