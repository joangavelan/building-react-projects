import { useState, useEffect } from 'react'

const TrackBar = ({currentSong}) => {

  const getPercentage = (current, total) => (current/total) * 100;

  const [fill, setFill] = useState(0);

  const updateTrackBarFill = () => {
    if(currentSong.currentTime && currentSong.duration) {
      setFill(getPercentage(currentSong.currentTime, currentSong.duration))
    }
    else setFill(0);
  } 

  useEffect(() => {
    currentSong.addEventListener('timeupdate', updateTrackBarFill);
    return () => currentSong.removeEventListener('timeupdate', updateTrackBarFill);
   }, [currentSong])

  return (
    <div className="track-bar">
      <div 
        className="track-bar__fill"
        style={{width: `${fill}%`}}/>
    </div>
  )
}

export default TrackBar