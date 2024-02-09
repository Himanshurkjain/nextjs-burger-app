import { createContext, useState } from "react";

const CartContext = createContext();


export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    function addItems(item) {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex === -1) {
            const newItem = {...item, quantity: 1}
            setCartItems([newItem, ...cartItems]);
        } else {
            const newItems = [...cartItems];
            ++newItems[itemIndex].quantity;
            setCartItems(newItems);
        }
        setItemCount(prev => prev + 1)
    }

    function removeItems(item, quantity) {
        if (quantity) {
            const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
            const newItems = [...cartItems];
            newItems[itemIndex].quantity = newItems[itemIndex].quantity -1;
            setCartItems(newItems);
            setItemCount(prev => prev - 1);
        } else {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
            setItemCount(prev => prev - item.quantity);
        }
    }

    return (
        <CartContext.Provider value={{cartItems, itemCount, addItems, removeItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;