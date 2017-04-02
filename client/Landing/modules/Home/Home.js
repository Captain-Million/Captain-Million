import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import cn from 'classnames';

import styles from './Home.css';

import logo from './images/ipad.png';
import arrival from './images/arrival.png';
import dispatch from './images/dispatch.png';
import products from './images/products.png';
import inventory from './images/inventory.png';
import report from './images/report.png';

const Home = () => {
  return (
    <div className={styles.home} >
      <Helmet title="Home" />
      <div className={styles.nav}>
        <div className={styles.section}>
          <ul>
            <li>Product</li>
            <li>Pricing</li>
            <li>Support</li>
            <li>Sign In</li>
            <li className={styles.navButton}><Link to="/wms">Start using Captain Million</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.section}>
          <div className={styles.heroDescription}>
            <h1 className={styles.appName}><span className={styles.appNameThin}>Captain</span> Million</h1>
            <p>Keep things in order.</p>
            <p>Know your business.</p>
            <p>Keep it simple.</p>
          </div>
          <div className={styles.heroImg}>
            <img src={logo} alt="Captain Million" />
          </div>
        </div>
      </div>
      <div className={cn(styles.features, styles.skew)}>
        <div className={styles.section}>
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
      <div className={styles.disclaimer}>
        <div className={styles.section}>
          <h3>Live dangerously!</h3>
          <p>We offer our&nbsp;software <strong>as&nbsp;is</strong>,&nbsp;for&nbsp;free.</p>
          <p className={styles.yellow}>We do&nbsp;not promise&nbsp;you neither&nbsp;uninterrupted&nbsp;operation,
          <br />nor&nbsp;technical support or&nbsp;even&nbsp;backups.</p>
          <p>The less you&nbsp;get, the&nbsp;less&nbsp;you&nbsp;can worry&nbsp;about,&nbsp;isn’t&nbsp;it&nbsp;so?</p>
          <p>Join <strong>0</strong>&nbsp;companies, already using WMS-proj. Today,&nbsp;for&nbsp;Free!</p>
          <a className={styles.disclaimerBtn}>Start using it for&nbsp;Free</a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.section}>
          <div>
            <h3>Captain<span className={styles.thin}> Million</span></h3>
            <a>Star us on Github</a>
          </div>
          <div>
            <h4>LEARN MORE</h4>
            <a>New features</a>
            <a>Plans and pricing</a>
            <a>Customers</a>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <a>Help Center</a>
            <a>User Guide</a>
            <a>Release notes</a>
          </div>
          <div>
            <h4>COMPANY</h4>
            <a>About us</a>
            <a>Terms of service</a>
            <a>Privacy policy</a>
            <a>Contact us</a>
          </div>
          <div>
            <h4>NEWSLETTER</h4>
            <div className={styles.form}>
              <input type="text" placeholder="your email address" />
              <a className={styles.footerBtn}>Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
