import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Findus = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">6, Beatrice Anike Street, <br /> Off University Road Behind Bovas Filling Station, <br /> Tanke Oke-Odo, Ilorin</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Sun - Sat: 10:00 AM - 10:00 PM</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default Findus;
