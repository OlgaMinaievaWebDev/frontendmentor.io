import { createContext, useReducer } from "react";


const CartContext = createContext(null)
const initialState = {
 cartItems: [],
 totalAmount: 0,
 totalQuantity: 0,
}

function cartReducer(state, action) {
 switch (action.type) {
   case "ADD_TO_CART": {
     const item = action.payload;
     const existingItem = state.cartItems.find((i) => i.name === item.name);

     let updatedCart;
     if (existingItem) {
       updatedCart = state.cartItems.map((i) =>
         i.name === item.name
           ? { ...i, quantity: i.quantity + item.quantity }
           : i
       );
     } else {
       updatedCart = [...state.cartItems, { ...item, quantity: 1 }];
     }

     const totalAmount = updatedCart.reduce(
       (sum, i) => sum + i.price * i.quantity,
       0
     );
     const totalQuantity = updatedCart.reduce((sum, i) => sum + i.quantity, 0);

     return {
       ...state,
       cartItems: updatedCart,
       totalAmount,
       totalQuantity,
     };
   }

   case "DECREASE_QUANTITY": {
     const item = action.payload;
     const updatedCart = state.cartItems
       .map((i) =>
         i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
       )
       .filter((i) => i.quantity > 0); // Remove if quantity becomes 0

     const totalAmount = updatedCart.reduce(
       (sum, i) => sum + i.price * i.quantity,
       0
     );
     const totalQuantity = updatedCart.reduce((sum, i) => sum + i.quantity, 0);

     return {
       ...state,
       cartItems: updatedCart,
       totalAmount,
       totalQuantity,
     };
   }

   case "REMOVE_ITEM_COMPLETELY": {
     const updatedCartItems = state.cartItems.filter(
       (item) => item.name !== action.payload.name
     );
     const totalAmount = updatedCartItems.reduce(
       (sum, i) => sum + i.price * i.quantity,
       0
     );
     const totalQuantity = updatedCartItems.reduce(
       (sum, i) => sum + i.quantity,
       0
     );
     return {
       ...state,
       cartItems: updatedCartItems,
       totalAmount,
       totalQuantity,
     };
   }
   default:
     return state;
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