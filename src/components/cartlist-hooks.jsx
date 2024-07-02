"use client"

import { createContext, useContext, useState } from "react";

const cartContents = [];

const CartListContext = createContext();

export const useCartList = () => useContext(CartListContext);

export default function CartListProvider ({ children }){
    const [ cartList, setCartList] = useState(cartContents);

    const removeCartItem = id =>
    {
        const newCartList = cartList.filter(item => item.id !== id);
        setCartList(newCartList);
    }

    const addCartItem = (id, name, desc, depart, price, thumb, qty) => {
        if (cartList.some(e => e.name === name)) {
            // We found at least one object that we're looking for!
            const updatedList = cartList.map(x => (x.id === id ? { ...x, qty: x.qty+qty } : x));
            setCartList(updatedList);
        }
        else {
            const newCartList = [
                ...cartList, { id, name, desc, depart, price, thumb, qty }
            ];
            setCartList(newCartList);
        }
    }

    const updateQuantity = (id, num) => {
        const updatedList = cartList.map(x => (x.id === id ? { ...x, qty: num } : x));
        setCartList(updatedList);

        let item = cartList.find(i => i.id === id);
        if (item.qty === 0) {
            removeCartItem(id);
        }
    }

    return (
        <CartListContext.Provider value = {{ cartList, removeCartItem, addCartItem, updateQuantity, }}>
            {children}
        </CartListContext.Provider>
    );
};