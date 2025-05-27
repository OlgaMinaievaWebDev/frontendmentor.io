import { createContext, useReducer } from "react";


const CartContext = createContext(null)
const initialState = {
 cartItems: [],
 totalAmount: 0,
 totalQuantity: 0,
}

function cartReducer(state, action) {
 

}


export const CartProvider = ({ children }) => {
 
 const [state, dispatch]= useReducer(cartReducer, initialState)
 


 return (
 <CartContext.Provider value={{state, dispatch}}>
   {children}
 </CartContext.Provider> 
)
}