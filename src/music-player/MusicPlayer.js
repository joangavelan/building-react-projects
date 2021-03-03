import React, { useState, useEffect } from 'react'
import TrackBar from './TrackBar'
import PlayInfo from './PlayInfo'
import Playlist from './Playlist'
import { songsList } from './data/songs'

const MusicPlayer = () => {
  //States
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [currentSong] = useState(new Audio(songsList[currentIndex].src))
  const [isPlaying, setIsPlaying] = useState(false);

  const updateAudioSrc = (index) => currentSong.src = songsList[index].src;
  
  const togglePlayPause = () => {
    !isPlaying ? currentSong.play() : currentSong.pause();
    setIsPlaying(isPlaying => !isPlaying)
  }

  const playControl = (index) => {
    if(currentIndex === index) {
      togglePlayPause();
    } else {
      setCurrentIndex(index);
      updateAudioSrc(index);
      currentSong.currentTime = 230;
      currentSong.play();
      setIsPlaying(true);
    }
  }

  const playNext = () => {
    if(songsList[currentIndex + 1]) {
      setCurrentIndex(prevIndex => prevIndex + 1)
      updateAudioSrc(currentIndex)
      currentSong.play();
      setIsPlaying(true);
    } else {
      setCurrentIndex(0);
      updateAudioSrc(0);
      setIsPlaying(false);
    }
  }

  useEffect(() => {
   currentSong.addEventListener('ended', playNext)
   return () => currentSong.removeEventListener('ended', playNext)
  })

  return (
    <div className="container">
      <TrackBar />
      <div className="player">
        <PlayInfo 
        songs={songsList}/>
        <Playlist 
          songs={songsList} 
          currentIndex={currentIndex}
          playControl={playControl}
          isPlaying={isPlaying}/>
      </div>
    </div>
  )
}

export default MusicPlayer