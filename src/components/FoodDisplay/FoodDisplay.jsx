import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem'; 

const FoodDisplay = ({ category = "All" }) => {  // Default category to "All"
  const { food_list } = useContext(StoreContext);

  return (
   
    <div className='food-display' id='food-display'>
       <hr /> 
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          (category === "All" || category === item.category) && (
            <FoodItem 
              key={item._id} 
              id={item._id} 
              name={item.name} 
              description={item.description} 
              price={item.price} 
              image={item.image} 
            />
          )
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
