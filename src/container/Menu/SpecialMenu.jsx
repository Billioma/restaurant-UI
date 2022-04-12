import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Main</p>
        <div className="app__specialMenu_menu_items">
          {data.main.map((main, index) => (
            <MenuItem key={main.title + index} title={main.title} price={main.price} tags={main.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.two} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Africana</p>
        <div className="app__specialMenu_menu_items">
          {data.africana.map((africana, index) => (
            <MenuItem key={africana.title + index} title={africana.title} price={africana.price} tags={africana.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Proteins</p>
        <div className="app__specialMenu_menu_items">
          {data.proteins.map((proteins, index) => (
            <MenuItem key={proteins.title + index} title={proteins.title} price={proteins.price} tags={proteins.tags} />
          ))}
        </div>
        <p className="app__specialMenu-menu_heading">Sauces & Dips</p>
        <div className="app__specialMenu_menu_items">
          {data.sauces.map((sauces, index) => (
            <MenuItem key={sauces.title + index} title={sauces.title} price={sauces.price} tags={sauces.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.four} alt="menu__img" />
        <br /><br /><br /><br />
        <img src={images.one} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pastry/Snacks</p>
        <div className="app__specialMenu_menu_items">
          {data.snacks.map((snacks, index) => (
            <MenuItem key={snacks.title + index} title={snacks.title} price={snacks.price} tags={snacks.tags} />
          ))}
        </div>
        <p className="app__specialMenu-menu_heading">Sides</p>
        <div className="app__specialMenu_menu_items">
          {data.sides.map((sides, index) => (
            <MenuItem key={sides.title + index} title={sides.title} price={sides.price} tags={sides.tags} />
          ))}
        </div>
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drinks, index) => (
            <MenuItem key={drinks.title + index} title={drinks.title} price={drinks.price} tags={drinks.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
