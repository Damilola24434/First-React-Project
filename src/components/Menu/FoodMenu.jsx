import React, { useState } from 'react';
import './FoodMenu.css';
import { menu_list } from '../../assets/assets';
import FoodDisplay from '../foodDisplay/FoodDisplay'; // Import FoodDisplay (uppercase F and D)

const FoodMenu = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <div className='food-menu' id='food-menu'>
        <h1>Explore Our Best Menu</h1>
        <div className="food-menu-list">
          {menu_list.map((item, index) => (
            <button
              key={index}
              className={`food-menu-list-item ${category === item.menu_name ? "active" : ""}`}
              onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
            >
              {item.menu_name}
            </button>
          ))}
        </div>
        
        {/* Render FoodDisplay below the list and pass the category prop */}
        <FoodDisplay category={category} /> {/* Correct component name with uppercase F and D */}
        <hr />
      </div>
    </div>
  );
};

export default FoodMenu;