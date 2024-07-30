import React from 'react';
import Title from '../atoms/Title';
import Grid from '../molecules/Grid';
import styles from './Section.module.css';

function Section() {
  return (
    <section className={styles.section}>
      <Title text="Explora los Juegos de Halo" className={styles.titleBlack} />
      <Grid />
    </section>
  );
}

export default Section;
