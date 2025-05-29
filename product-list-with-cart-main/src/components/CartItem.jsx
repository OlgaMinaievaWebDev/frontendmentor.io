import { useContext } from "react";
import CartContext from "../context/CartContext";

function CartItem({ index, item }) {
 
const { dispatch } = useContext(CartContext);
 const handleRemoveItem = (item) => {
   dispatch({ type: "REMOVE_ITEM_COMPLETELY", payload: item });
 };

 return (
   <>
     <li key={index}>
       <div className="flex justify-between items-start border-b border-slate-200 pb-2">
         <div>
           <p className="font-semibold text-sm">{item.name}</p>
           <div className="flex items-center gap-4 text-sm mt-1">
             <p className="text-amber-800 font-semibold">{item.quantity}x</p>
             <p>{item.price.toFixed(2)}</p>
             <p>{(item.price * item.quantity).toFixed(2)}</p>
           </div>
         </div>
     <button
      onClick={() => handleRemoveItem(item)}
      className="w-5 h-5 rounded-full border border-slate-500 flex justify-center items-center hover:font-bold text-xs">
           X
         </button>
       </div>
     </li>
   </>
 );
}

export default CartItem
