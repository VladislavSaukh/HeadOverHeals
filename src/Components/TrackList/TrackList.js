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
                    return <Track key={track.id} changePreviewImg={props.changePreviewImg} changePreviewTitle={props.changePreviewTitle}  changePreview={props.changePreview} changeTrack={props.changeTrack} onAdd={props.onAdd} name={track.name} img={track.img} preview={track.preview_url} album={track.album}  artist={track.artist} track={track}  isRemove={false} onRemove={props.onRemove} />
                })}
            </div>
        )
    }

export default TrackList