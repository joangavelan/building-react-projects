import React from 'react'
import './Image-Gallery.css'

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div>
        <img src="images/biodiversidad.jpg" alt="biodiversity"/>
        <img src="images/outer-space.jpg" alt="outer space"/>
        <img src="images/rise-of-skywalker.jpg" alt="rise of skywalker"/>
      </div>
      <img className="selected-image" src="images/island.jpg" alt="biodiversity"/>
      <div>
        <img src="images/world.jpg" alt="world"/>
        <img className="selected" src="images/island.jpg" alt="island"/>
        <img src="images/earth.jpg" alt="earth"/>
      </div>
    </div>
  )
}

export default ImageGallery
