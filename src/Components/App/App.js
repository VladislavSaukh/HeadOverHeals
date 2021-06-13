import './App.css';
import React,{useState,useEffect} from 'react';
import '../SearchBar/SearchBar'
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import LogIn from "../LogIn/LogIn";
import TrackList from "../TrackList/TrackList";
import Spotify from "../util/Spotify";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "../ChatFeed/ChatFeed"
import SignUp from "../SignUp/SignUp";
import Smth from "../Smth/Smth";
import MusicPlayer from '../MusicPlayer/MusicPlayer';
<<<<<<< HEAD
import chat from '../logo/chat.png';
import music from '../logo/music.png';
import profile from '../logo/profile.png';
import logout from '../logo/logout.png';
import logo from '../logo/hohloh.png';

=======
import axios from 'axios';
>>>>>>> 0d718e362ac1c1f933ad7bd4a95a9dceb4ea37a6

function App (props) {
    
        const [state, setState] = useState(
            {searchResults :[{name:'Где нас нет', artists:'Oxxxymiron', album:'Горгород' , id:1, isRemove:false},
                {name:'Положение',artists:'Scryptonite',album:'17',id:2,isRemove:false},
                {name:'Это любовь',artists:'Scryptonite',album:'17',id:3,isRemove:false},
                {name:'Кем ты стал', artists:'Oxxxymiron', album:'Горгород' , id:4,isRemove:false},
                {name:'Слово мэра', artists:'Oxxxymiron', album:'Горгород' , id:5,isRemove:false}
    ]})
    const [users, setUsers] = useState([])
    useEffect(()=>{
      axios.get("/fetch").then(function(response) {
       //   console.log(response.data)
       console.log(response.data)
       setUsers(response.data.map(student=>({
           id: student.id,
           login: student.username,
           password: student.password
       })))
       console.log(users)
      })  
    },[])
    console.log(users)
    const [previewImg, setPreviewImg] = useState('https://i.scdn.co/image/ab67616d00001e02eb2e8ab6af66a282f6e60a7e')
    const [previewTitle, setPreviewTitle] = useState('Cadillac')
    const [playListName, setPlayListName] = useState('');
        const [playListTracks, setPlayListTracks] = useState( []);
        const [logged,setLogged] = useState(false)
        const [whichSection, setWhichSection] = useState({
                                                            music:true,
                                                            chat: false,
                                                            profile: false
        })
        const [URI, setURI] = useState('3lE8RY6yZoGqqJeZS06u6J')
        const [preview, setPreview] = useState('https://p.scdn.co/mp3-preview/567cbe5ca1d46c94e3a72347b13068b5b2851833?cid=d954ff7ee6e04e35a9f0fe3ddf6668c7')
        const checkLogin =(login, password)=>{
            users.map((user)=>{
            if(login===user.login && password===user.password){
                setLogged(true)
            }})
    }
    const addUser =(login,password)=>{
            if(password!=='' || login!==''){
            setUsers([{login: login, password: password}, ...users])
    }}
    const goToMusic =(event) =>{
            event.preventDefault();
            setWhichSection({
                music:true,
                chat: false,
                profile: false})
    }
    const LogOut =(event) =>{
            event.preventDefault();
            setLogged(false);
    }
    const goToChat =(event)=>{
            event.preventDefault();
        setWhichSection({
            music:false,
            chat: true,
            profile: false})
    }
    const goToProfile =(event)=>{
        event.preventDefault();
        setWhichSection({
            music:false,
            chat: false,
            profile: true})
    }
    const addTrack =(track)=>{
            if(playListTracks.find(savedTrack=>
              savedTrack.id===track.id
            )) {} else {
              setPlayListTracks([{name:track.name, artists: track.artists, album: track.album, id: track.id, isRemove: true},...playListTracks])
    }}
     const removeTrack= (track)=>{
        setPlayListTracks(playListTracks.filter(rightTrack=>{
            if(rightTrack.id!==track.id){return rightTrack}
        }))
     }
     const updatePlaylistName = (name) =>{
        setPlayListName(name);
     }
     const savePlaylist = () =>{
         const URI = state.playListTracks.map(track=>track.uri)
     }
     const search=(term) =>{
        Spotify.search(term).then((searchResult)=>setState({searchResults:searchResult}))
     }
     const changePreview =(preview_url)=>{
         setPreview(preview_url)
     }
     const changeTrack=(id) =>{
     setURI(id)
     }
     const changePreviewImg=(photo)=>{
         setPreviewImg(photo)
     }
     const changePreviewTitle =(title) =>{
         setPreviewTitle(title)
     }

     //-----------------------------------------------------------


        console.log(SearchResults)
     console.log(preview)
        return (
            logged ?
            <div>
                <header>
                    <h1 onClick={goToMusic}><img src={logo} width='70px' height='50px'/></h1>
                    {/*<a type='button' onClick={goToMusic} className='headerLink'><img src={logo} width='50px' height='50px'/></a>*/}
                    {/*<h1>Head <span className="highlight">over</span> Heels</h1>*/}
                        <a type='button1' onClick={goToChat} className='headerLink1'><img src={chat} width='50px' height='50px'/></a>
                        <a type='button2' onClick={goToMusic} className='headerLink'><img src={music} width='50px' height='50px'/></a>
                        <a type='button3' onClick={goToProfile} className='headerLink'><img src={profile} width='50px' height='50px'/></a>
                        <a type='button4' onClick={LogOut} className='headerLink'><img src={logout} width='50px' height='50px'/></a>
                    {/*<iframe*/}
                    {/*    src = {`https://open.spotify.com/embed/track/${URI}`}*/}
                    {/*    width = "300"*/}
                    {/*    height = "80"*/}
                    {/*    frameBorder = "0"*/}
                    {/*    allowTransparency = "true"*/}
                    {/*    allow = "encrypted-media" >*/}
                    {/*    </iframe>*/}
                </header>
                     { whichSection.chat ? <ChatEngine
                                height='100vh'
                                projectID='2c06a46a-893b-4628-b545-202f7baebbed'
                                userName='kek'
                                userSecret='123'
                                //renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
                    /> : whichSection.music ?
                    <div className="App">
                            <div className="musicPlayer">
                        <MusicPlayer title={previewTitle}  src = {preview} img={previewImg} />
                            </div>
                        <SearchBar onSearch={search} />
                        <div className="App-playlist">
                            <SearchResults changePreviewImg={changePreviewImg} changePreviewTitle={changePreviewTitle} changePreview={changePreview} searchResults={state.searchResults}  changeTrack={changeTrack} onAdd={addTrack}/>
                            <PlayList onSave={savePlaylist} playListTracks={playListTracks} playListName={playListName} onChange={updatePlaylistName} onRemove={removeTrack} />
                    </div>
                    </div> : whichSection.profile ? <Smth /> : '' }

            </div> : <LogIn checkLogin={checkLogin} addUser={addUser}/>
        );

}
export default App;
