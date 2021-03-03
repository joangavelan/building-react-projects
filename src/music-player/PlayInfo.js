import React from 'react'

const PlayInfo = ({songs, isPlaying, togglePlayPause}) => {
  return (
    <div className="player__header">
      {/* player__thumbnail */}
      <div className="player__thumbnail">
          <img src="https://www.stocksy.com/blog/wp-content/uploads/2018/12/Search-by-Color_1200x1200-500x500.jpg" className="player__img" alt="player-thumbnail"/>
      </div>
      {/* player__details */}
      <div className="player__details">
          <h1 className="player__name">Jab Player</h1>
          <div className="player__count-wrapper">
              <span className="player__count">{songs.length}</span> songs
          </div>
          <button className="button is-green player__trigger" onClick={() => togglePlayPause()}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
      </div>
    </div>
  );
}

export default PlayInfo