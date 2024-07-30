import React from 'react';
import styles from './Logo.module.css';

function Logo() {
  return (
    <img src="/halo-logo.jpeg" alt="Halo Logo" className={styles.logo} />
  );
}

export default Logo;
