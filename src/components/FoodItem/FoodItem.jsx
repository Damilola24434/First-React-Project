import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; 
import { StoreContext } from '../../context/StoreContext'; 

const FoodItem = ({ id, name, price, description, image }) => { 
    const { addToCart, removeFromCart, cartItems } = useContext(StoreContext); // ✅ Use StoreContext
    const [itemCount, setItemCount] = useState(cartItems[id] || 0); 

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!itemCount ? (
                    <img 
                        className='add' 
                        onClick={() => {
                            setItemCount(prev => prev + 1);
                            addToCart(id); // ✅ Use addToCart
                        }} 
                        src={assets.add_icon_white} 
                        alt=""
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => {
                                if (itemCount > 0) {
                                    setItemCount(prev => prev - 1);
                                    removeFromCart(id); // ✅ Use removeFromCart
                                }
                            }} 
                            src={assets.remove_icon_red} 
                            alt=""
                        />
                        <p>{itemCount}</p>
                        <img 
                            onClick={() => {
                                setItemCount(prev => prev + 1);
                                addToCart(id);
                            }} 
                            src={assets.add_icon_green} 
                            alt=""
                        />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
