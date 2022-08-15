import React from 'react';
import { FiMail, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, /*Newsletter*/ } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">6, Beatrice Anike Street, 
          <br /> Off University Road,
          <br /> Behind Bovas Filling Station,
          <br /> Tanke Oke-Odo, Ilorin
        </p>
        <p className="p__opensans">+234 817-999-9978</p>
      </div>

      <div className="app__footer-links_logo">
      <img src={images.loggo} alt="CLAYPOT_NG"/>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="mailto:claypot.ng@gmail.com"><FiMail /></a>
          <a href="https://twitter.com/Claypot_ng"><FiTwitter /></a>
          <a href="https://www.instagram.com/claypot.ng/"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday-Saturday:</p>
        <p className="p__opensans">10:00 AM - 10:00 PM</p>
      </div>
    </div>
  </div>
);

export default Footer;
