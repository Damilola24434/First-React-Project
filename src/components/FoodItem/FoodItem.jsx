import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; 
import { StoreContext } from "../../context/storeContext";
 

const FoodItem = ({ id, name, price, image }) => { 
    const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
    const [itemCount, setItemCount] = useState(cartItems[id] || 0); 

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
            </div>
            <div className='food-item-info'>
                <div className="food-item-name-price">
                    <p className="food-item-name">{name}</p>
                    <p className="food-item-price">${price}</p>
                </div>
                {!itemCount ? (
                    <button 
                        className='order-button' 
                        onClick={() => {
                            setItemCount(prev => prev + 1);
                            addToCart(id);
                        }}
                    >
                        Order
                    </button>
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => {
                                if (itemCount > 0) {
                                    setItemCount(prev => prev - 1);
                                    removeFromCart(id);
                                }
                            }} 
                            src={assets.remove_icon_red} 
                            alt="Remove"
                        />
                        <p>{itemCount}</p>
                        <img 
                            onClick={() => {
                                setItemCount(prev => prev + 1);
                                addToCart(id);
                            }} 
                            src={assets.add_icon_green} 
                            alt="Add"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoodItem;