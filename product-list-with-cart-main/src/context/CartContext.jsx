import { createContext, useReducer } from "react";


const CartContext = createContext(null)
const initialState = {
 cartItems: [],
 totalAmount: 0,
 totalQuantity: 0,
}

function cartReducer(state, action) {
 switch (action.type) {
  case "ADD_TO_CART":
   return {
    ...state,
    cartItems: [...state.cartItems, action.payload],
    totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
    totalQuantity: state.totalQuantity + action.payload.quantity,
   }

 }
}


export const CartProvider = ({ children }) => {
 
 const [state, dispatch]= useReducer(cartReducer, initialState)
 


 return (
 <CartContext.Provider value={{state, dispatch}}>
   {children}
 </CartContext.Provider> 
)
}

export default CartContext;