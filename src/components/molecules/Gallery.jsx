import React from 'react';
import Image from '../atoms/Image';
import styles from './Gallery.module.css';

function Gallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <Image key={index} src={img.src} alt={img.alt} className={styles.image} />
      ))}
    </div>
  );
}

export default Gallery;
