import React from 'react'
import './TrackList.css'
import '../Track/Track'
import Track from "../Track/Track";

function TrackList (props){
    console.log(props.tracks)
        return(

            <div className="TrackList">
                {
                    props.tracks.map((track)=>{
                    return <Track key={track.id} changeTrack={props.changeTrack} onAdd={props.onAdd} name={track.name} album={track.album} artist={track.artist} track={track}  isRemove={false} onRemove={props.onRemove} />
                })}
            </div>
        )
    }

export default TrackList