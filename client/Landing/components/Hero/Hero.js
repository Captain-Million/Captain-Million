import React from 'react';

import styles from './Hero.css';

import ipad from './images/ipad.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <div className={styles.heroDescription}>
          <h1 className={styles.appName}><span className={styles.appNameThin}>Captain</span> Million</h1>
          <p>Keep things in order.</p>
          <p>Know your business.</p>
          <p>Keep it simple.</p>
        </div>
        <div className={styles.heroImg}>
          <img src={ipad} alt="Captain Million" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
