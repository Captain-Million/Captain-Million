import React from 'react';

import styles from './Features.css';

import arrival from './images/arrival.png';
import dispatch from './images/dispatch.png';
import products from './images/products.png';
import inventory from './images/inventory.png';
import report from './images/report.png';

const Features = () => {
  return (
    <div className={styles.features}>
      <div>
        <h2>Revolutionary new features</h2>
        <div className={styles.feature}>
          <div className={styles.featureImg}>
            <img src={products}alt="Products" />
          </div>
          <div className={styles.featureText}>
            <h3>Products list</h3>
            <p>You can have a list of products that you have in stock. Once you’ve completed adding each product by hands, you
              can use them into your documents.</p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureImg}>
            <img src={arrival} alt="Arrival" />
          </div>
          <div className={styles.featureText}>
            <h3>Arrival acts</h3>
            <p>This useful type of document helps you to describe which products arrived to your warehouse.</p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureImg}>
            <img src={dispatch} alt="Dispatch" />
          </div>
          <div className={styles.featureText}>
            <h3>Dispatch acts</h3>
            <p>Whene some products leave your warehouse, you can store a record of it with a dispatch act.</p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureImg}>
            <img src={inventory} alt="Inventory" />
          </div>
          <div className={styles.featureText}>
            <h3>Inventory acts</h3>
            <p>This type of document helps you to keep your data an exact reflection of reality.</p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureImg}>
            <img src={report} alt="Report" />
          </div>
          <div className={styles.featureText}>
            <h3>Powerful report</h3>
            <p>One stock quantity report to rule your business. It lets you meditate and think of how wise you are.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
