import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Ensure undefined items start from 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId] || prev[itemId] === 0) return prev; // Prevent negative values
            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
