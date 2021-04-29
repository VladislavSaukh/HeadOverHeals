import './App.css';
import React,{useState} from 'react';
import '../SearchBar/SearchBar'
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import LogIn from "../LogIn/LogIn";
import TrackList from "../TrackList/TrackList";
import Spotify from "../util/Spotify";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "../ChatFeed/ChatFeed"


function App (props) {
        const [state, setState] = useState(
            {searchResults :[{name:'Где нас нет', artists:'Oxxxymiron', album:'Горгород' , id:1, isRemove:false},
                {name:'Положение',artists:'Scryptonite',album:'17',id:2,isRemove:false},
                {name:'Это любовь',artists:'Scryptonite',album:'17',id:3,isRemove:false},
                {name:'Кем ты стал', artists:'Oxxxymiron', album:'Горгород' , id:4,isRemove:false},
                {name:'Слово мэра', artists:'Oxxxymiron', album:'Горгород' , id:5,isRemove:false}
    ]})
    const [playListName, setPlayListName] = useState('');
        const [playListTracks, setPlayListTracks] = useState( []);
        const [user, setUser] = useState({login: 'kek', password:'123'})
        const [logged,setLogged] = useState(false)
        const [isChat, setIsChat] = useState(false)
        const [URI, setURI] = useState('3lE8RY6yZoGqqJeZS06u6J')
        const checkLogin =(login, password)=>{
            if(login===user.login || password===user.password){
                setLogged(true)
            }
    }
    const goToMusic =(event) =>{
            event.preventDefault();
            setIsChat(false)
    }
    const LogOut =(event) =>{
            event.preventDefault();
            setLogged(false);
    }
    const goToChat =(event)=>{
            event.preventDefault();
            setIsChat(true);
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
     const changeTrack=(id) =>{
     setURI(id)
     }
     console.log(playListTracks);
        return (
            logged ?
            <div>
                <header>
                  <h1>Head <span className="highlight">over</span> Heels</h1>
                        <a type='button' onClick={goToChat} className='headerLink'>Chat</a>
                        <a type='button' onClick={goToMusic} className='headerLink'>Music</a>
                        <a type='button' onClick={LogOut} className='headerLink'>Log out</a>
                    <iframe
                        src = {`https://open.spotify.com/embed/track/${URI}`}
                        width = "300"
                        height = "80"
                        frameBorder = "0"
                        allowTransparency = "true"
                        allow = "encrypted-media" >
                        </iframe>
                    </header>
                     {isChat ? <ChatEngine
                                height='100vh'
                                projectID='2c06a46a-893b-4628-b545-202f7baebbed'
                                userName='kek'
                                userSecret='123'
                                renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
                    /> :
                    <div className="App">
                        <SearchBar onSearch={search} />
                        <div className="App-playlist">
                            <SearchResults searchResults={state.searchResults}  changeTrack={changeTrack} onAdd={addTrack}/>
                            <PlayList onSave={savePlaylist} playListTracks={playListTracks} playListName={playListName} onChange={updatePlaylistName} onRemove={removeTrack} />
                        </div>
                    </div>}

            </div> : <LogIn checkLogin={checkLogin} />
        );

}
export default App;
