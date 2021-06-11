import React from 'react'
import { AiOutlineFastBackward, AiOutlineFastForward } from "react-icons/ai";
import { FaPlay,FaPause } from "react-icons/fa";
import "./MusicPlayer.css";
import { useState } from 'react';
import { useEffect } from 'react'

function MusicPlayer(props) {
  const [turnOn, setTurnOn] = useState(false);
  const [trackName, setTrackName] = useState("Show")
  const [width, setWidth] = useState(0)
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlay, setIsPlay] = useState(false)
 
  const play=()=>{
     setIsPlay(true)
    document.querySelector('audio').play()
     setTurnOn(true)
  }
  const stop =()=>{
    setIsPlay(false)
    document.querySelector('audio').pause()
    setTurnOn(false)
  }
  const nextTrack =()=>{
    console.log(trackIndex)
    setTrackIndex(1)
    setIsPlay(false)
  }
  const prevTrack =()=>{
    console.log(trackIndex)
    setTrackIndex(0)
    setIsPlay(false)
  }
  const progressLine = (event)=>{
    const {duration, currentTime} = event.target
    const progressPersent = (currentTime/duration)*100
    setWidth(progressPersent)
    if(progressPersent==100) {setTrackIndex(trackIndex+1); setIsPlay(false);}

  }
  const setProgress = (event)=>{
    const width = event.target.clientWidth
    const clickX = event.nativeEvent.offsetX
    const duration = document.querySelector('audio').duration
    document.querySelector('audio').currentTime= (clickX/ width) *duration
  }
  
  useEffect(()=>{
    if(turnOn){play()}
  },[trackIndex])
  useEffect(()=>{
    if(trackIndex===1){setTrackName("Olala")} else {setTrackName("Show")}
  }, [trackIndex])
  console.log(props.src)
  return (
    <div className={`music-container ${isPlay ? "play" : ""}`} id="music-container">
    <div className="music-info">
      <h4 id="title">{props.title}</h4>
      <div className="progress-container" onClick={setProgress} >
        <div className="progress" style={{width: `${width}%`}}></div>
      </div>
    </div>
    <audio src={props.src} id="audio" onTimeUpdate={ progressLine }></audio>
    <div className="img-container">
      <img src={props.img} alt="music-cover" id="cover" />
    </div>
    <div className="navigation">
      <button id="prev" className="action-btn" onClick={prevTrack}>
        <AiOutlineFastBackward />
      </button>
      <button id="play" className="action-btn action-btn-big" onClick={isPlay ? stop : play} >
        { isPlay ? <FaPause /> :<FaPlay />}
      </button>
      <button id="next" className="action-btn" onClick={nextTrack}>
        <AiOutlineFastForward />
      </button>
    </div>
  </div>
  
  );
}

export default MusicPlayer ;
