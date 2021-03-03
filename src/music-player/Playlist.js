import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'

const Playlist = ({songs, currentIndex, playControl, isPlaying}) => {
 
  const toggleIcon = (index) => {
    if(currentIndex === index) {
      return isPlaying 
      ? <FaPause className="pp-icon" onClick={() => playControl(index)}/> 
      : <FaPlay className="pp-icon"  onClick={() => playControl(index)}/>
    } 
    return <FaPlay className="pp-icon"  onClick={() => playControl(index)}/>
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