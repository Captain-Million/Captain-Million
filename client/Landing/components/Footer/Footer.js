import React from 'react';

import styles from './Footer.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div>
          <h3 className={styles.footerName}><span className={styles.footerNameThin}>Captain</span> Million</h3>
        </div>
        {/*
        <div>
          <h4>LEARN MORE</h4>
          <a href="http://captain-million.herokuapp.com/">New features</a>
          <a href="http://captain-million.herokuapp.com/">Plans and pricing</a>
          <a href="http://captain-million.herokuapp.com/">Customers</a>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <a href="http://captain-million.herokuapp.com/">Help Center</a>
          <a href="http://captain-million.herokuapp.com/">User Guide</a>
          <a href="http://captain-million.herokuapp.com/">Release notes</a>
        </div>
        */}
        <div>
          <h4>COMPANY</h4>
          {/*
          <a href="http://captain-million.herokuapp.com/">About us</a>
          <a href="http://captain-million.herokuapp.com/">Terms of service</a>
          <a href="http://captain-million.herokuapp.com/">Privacy policy</a>
          <a href="http://captain-million.herokuapp.com/">Contact us</a>
          */}
          <a href="https://github.com/Captain-Million/Captain-Million">Star us on Github</a>
        </div>
        {/*
        <div className={styles.subscribeSection}>
          <h4>NEWSLETTER</h4>
          <div className={styles.form}>
            <input type="text" placeholder="your email address" />
            <a href="http://captain-million.herokuapp.com/" className={styles.footerBtn}>Subscribe</a>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Footer;
