import { useEffect } from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'

const Playlist = ({songs, currentSong, currentIndex, setCurrentIndex, isPlaying, setIsPlaying, togglePlayPause}) => {

  const updateAudioSrc = (index) => currentSong.src = songs[index].src;

  const playControl = (index) => {
    if(currentIndex === index) {
      togglePlayPause();
    } else {
      setCurrentIndex(index);
      updateAudioSrc(index);
      currentSong.play();
      setIsPlaying(true);
    }
  }

  const playNext = () => {
    if(songs[currentIndex + 1]) {
      setCurrentIndex(prevIndex => prevIndex + 1)
      updateAudioSrc(currentIndex + 1)
      currentSong.play();
      setIsPlaying(true);
    } else {
      setCurrentIndex(0);
      updateAudioSrc(0);
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    currentSong.addEventListener('ended', playNext);
    return () => currentSong.removeEventListener('ended', playNext);
  })
 
  const toggleIcon = (index) => {
    if(currentIndex === index) {
      return isPlaying 
      ? <FaPause className="pp-icon" onClick={() => playControl(index)}/> 
      : <FaPlay className="pp-icon" onClick={() => playControl(index)}/>
    } 
    return <FaPlay className="pp-icon" onClick={() => playControl(index)}/>
  }

  return (
    <div className="player__body">
      <ul className="playlist">
        {songs.map((song, index) => (
          <li className={`playlist__song ${currentIndex === index ? 'playlist__song--active' : ''}`} key={song.id}>
            <div className="play-pause">
              {toggleIcon(index)}
            </div>
            <div className="playlist__song-details">
                <span className="playlist__song-name">{song.title}</span>
                <br/>
                <span className="playlist__song-artist">{song.artist}</span>
            </div>
            <div className="playlist__song-duration">
                {song.time}
            </div>
          </li>
        ) )}
      </ul>
    </div>
  )
}

export default Playlist