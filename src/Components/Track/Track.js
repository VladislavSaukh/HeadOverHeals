import React from 'react';
import './Track.css'
function Track(props){


    const addTrack=()=>{
      props.onAdd(props.track)
     }
     const removeTrack=()=>{
        props.onRemove(props.track)
     }
    const handleCLick=(event)=>{
        event.preventDefault();
        const id = props.track.id;
        props.changeTrack(id)
     }
     const previewTrack=(event)=>{
         event.preventDefault();
         const preview = props.track.preview
         const name = props.track.name
         const img = props.track.img
         props.changePreview(preview)
         props.changePreviewTitle(name)
         props.changePreviewImg(img)
     }
    
        console.log(props.track.id)
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{props.track.artists}</h3>
                    <p>{props.track.name} | {props.track.album}</p>
                </div>
                <a className='play-button' type='button' onClick={previewTrack}>Preview</a>
                <a className='play-button' type='button' onClick={handleCLick}>Play</a>
                {props.track.isRemove ? <button className="Track-action" onClick={removeTrack}>-</button> : <button className="Track-action" onClick={addTrack}>+</button>}
            </div>
        )
}
export default Track;