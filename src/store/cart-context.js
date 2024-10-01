import React from 'react';

// 這裡可定義默認值也可以不定，方便查看
const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    totalPrice:0,
    addItem:()=>{},
    removeItem:()=>{},
    clearCart:()=>{}
})

export default CartContext;