import React, { useState } from 'react'
import TrackBar from './TrackBar'
import PlayInfo from './PlayInfo'
import Playlist from './Playlist'
import { songsList } from './data/songs'

const MusicPlayer = () => {
  //Global States
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [currentSong] = useState(new Audio(songsList[currentIndex].src))
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    !isPlaying ? currentSong.play() : currentSong.pause();
    setIsPlaying(isPlaying => !isPlaying)
  }

  return (
    <div className="container">
      <TrackBar currentSong={currentSong}/>
      <div className="player">
        <PlayInfo 
          songs={songsList} 
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}/>
        <Playlist 
          songs={songsList} 
          currentSong={currentSong}
          currentIndex={currentIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setCurrentIndex={setCurrentIndex}
          togglePlayPause={togglePlayPause}/>
      </div>
    </div>
  )
}

export default MusicPlayer