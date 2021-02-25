import React, { useState } from 'react'
import './Image-Gallery.css'

const images = [
  {id: 1, name: 'biodiversity', src: 'images/biodiversity.jpg'},
  {id: 2, name: 'outer-space', src: 'images/outer-space.jpg'},
  {id: 3, name: 'rise-of-skywalker', src: 'images/rise-of-skywalker.jpg'},
  {id: 4, name: 'world', src: 'images/world.jpg'},
  {id: 5, name: 'island', src: 'images/island.jpg'},
  {id: 6, name: 'earth', src: 'images/earth.jpg'}
];

const ImageGallery = () => {
  const [selectedImage, setImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <img className="selected-image" src={selectedImage.src} alt={selectedImage.name}/>
      <div className="images">
        {images.map(image => (
          <img 
            key={image.id} 
            onClick={() => setImage(image)} 
            src={image.src}
            alt={image.name}
            className={selectedImage === image ? 'selected' : null}/>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery 