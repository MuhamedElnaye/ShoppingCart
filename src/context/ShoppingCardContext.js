import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCard from "../component/ShoppingCard";

const ShoppingCardContext = createContext({});
const intialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const ShoppingCardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setItems] = useState(intialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemsFromCart = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCardContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemsFromCart,
        closeCart,
        openCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCard isOpen={isOpen} />
    </ShoppingCardContext.Provider>
  );
};

export default ShoppingCardProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCardContext);
};
