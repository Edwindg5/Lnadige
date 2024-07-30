import React from 'react';
import Title from '../atoms/Title';
import Gallery from '../molecules/Gallery';
import styles from './PosterSection.module.css';

function PosterSection() {
  const posters = [
    { src: '/halo-poster1.jpeg', alt: 'Halo Poster 1' },
    { src: '/halo-poster2.jpeg', alt: 'Halo Poster 2' },
    { src: '/halo-poster3.jpeg', alt: 'Halo Poster 3' },
  ];

  return (
    <section className={styles.posterSection}>
      <Title text="Carteles de Halo" />
      <Gallery images={posters} />
    </section>
  );
}

export default PosterSection;
