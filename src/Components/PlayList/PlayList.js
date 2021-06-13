import React from 'react';
import './PlayList.css'
import TrackList from "../TrackList/TrackList";
import Track from "../Track/Track";
function PlayList (props){
const handleChange=(event)=>{
        const name = event.target.value
        props.onChange(name)
        }
        return(
            <div className="Playlist">
                <input placeholder="New Playlist" onChange={handleChange} />
                <TrackList playListName={props.playListName} tracks={props.playListTracks}  onRemove={props.onRemove} isRemove={true}/>
                <button onClick={props.onSave} className="Playlist-save">SAVE</button>
            </div>
        )
}
export default PlayList