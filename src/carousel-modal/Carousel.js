import React, { useState, useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import './Carousel.css'

const images = [
  {id: 1, name: 'biodiversity', src: 'images/biodiversity.jpg'},
  {id: 2, name: 'outer-space', src: 'images/outer-space.jpg'},
  {id: 3, name: 'rise-of-skywalker', src: 'images/rise-of-skywalker.jpg'},
  {id: 4, name: 'world', src: 'images/world.jpg'},
  {id: 5, name: 'island', src: 'images/island.jpg'},
  {id: 6, name: 'earth', src: 'images/earth.jpg'}
];

const Carousel = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null); 

  const openModal = (index) => {
    setModal(true);
    setModalImage(images[index]);
  }

  const previous = (index) => {
    if(index <= 0) index = images.length - 1;
    else index--;
    setModalImage(images[index]);
  }

  const next = (index) => {
    if(index >= images.length - 1) index = 0;
    else index++;
    setModalImage(images[index]);
  }
  //index of current image in modal
  const index = images.indexOf(modalImage);

  const handleKeys = (e) => {
    const key = e.key;
    if(key === 'Escape') setModal(false);
    else if(key === 'ArrowRight') next(index);
    else if(key === 'ArrowLeft') previous(index);
    else return;
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeys);
    return () => {
      document.removeEventListener("keydown", handleKeys);
    };
  });

  return (
    <div className="carousel">
      <h1>Carousel</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            onClick={() => openModal(index)} 
            key={image.id}
            src={image.src}
            alt={image.name}
            />
        ))}
        {modal &&
          <div className="modal">
            <div className="modal-close" onClick={() => setModal(false)}></div>
            <div className="modal-content">
              <img src={modalImage.src} alt={modalImage.name}/>
              <FaAngleLeft className="angle left" onClick={() => previous(index)}/>
              <FaAngleRight className="angle right" onClick={() => next(index)}/>
              <FaTimes className="close-icon" onClick={() => setModal(false)}/>
            </div>
          </div> 
        }
        
      </div>
    </div>
  )
}

export default Carousel