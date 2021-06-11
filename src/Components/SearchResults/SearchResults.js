import React from 'react';
import './SearchResults.css'
import TrackList from "../TrackList/TrackList";

 function SearchResults (props){
        console.log(props.searchResults)
        return(
            <div className="SearchResults">
                <h2>Results</h2>
               <TrackList changePreviewImg={props.changePreviewImg} changePreviewTitle={props.changePreviewTitle}  changePreview={props.changePreview} changeTrack={props.changeTrack} tracks={props.searchResults} onAdd={props.onAdd} />
            </div>
        )

 }
 export default SearchResults;