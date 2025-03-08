import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFormCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
      for(const item in cartItems){
        if (cartItems[item] > 0) {
          let itemInfo = food_list.find((product)=> product. _id === item);
          totalAmount += itemInfo.price*cartItems[item]
        }
     
      }

      return totalAmount;
  }

  console.log("StoreContext initialized with:", food_list);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFormCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
