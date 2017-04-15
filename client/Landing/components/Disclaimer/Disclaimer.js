import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <div>
        <h3>Live dangerously!</h3>
        <p>We offer our&nbsp;software <strong>as&nbsp;is</strong>,&nbsp;for&nbsp;free.</p>
        <p className={styles.yellow}>We do&nbsp;not promise&nbsp;you neither&nbsp;uninterrupted&nbsp;operation,
        <br />nor&nbsp;technical support or&nbsp;even&nbsp;backups.</p>
        <p>The less you&nbsp;get, the&nbsp;less&nbsp;you&nbsp;can worry&nbsp;about,&nbsp;isn’t&nbsp;it&nbsp;so?</p>
        <p>Join <strong>0</strong>&nbsp;companies, already using WMS-proj. Today,&nbsp;for&nbsp;Free!</p>
        <Link to="/wms" className={styles.disclaimerBtn}>Start using</Link>
      </div>
    </div>
  );
};

export default Disclaimer;
