import { useContext } from 'react';
import emptyCartImage from '../assets/images/illustration-empty-cart.svg'
import CartContext from '../context/CartContext';
import CartItem from './CartItem';
function Cart({ setShowModal, showTitle = true, showNote = true }) {
  const { state } = useContext(CartContext);
  const { cartItems, totalAmount, totalQuantity } = state;

  if (cartItems.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto">
        <h2 className="text-lg font-bold text-orange-700">Your Cart (0)</h2>
        <img
          src={emptyCartImage}
          alt="empty cart"
          className="md:p-12 lg:p-16 p-20"
        />
        <p className="text-sm text-orange-800 text-center">
          Your added items will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto">
      {showTitle && (
        <h2 className="text-lg font-bold text-orange-700">
          Your Cart ({totalQuantity})
        </h2>
      )}

      <ul className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}

        <li className="flex justify-between items-center pt-2">
          <p className="text-sm font-medium">Order Total</p>
          <p className="text-slate-800 font-bold">${totalAmount.toFixed(2)}</p>
        </li>
      </ul>

      {/* Conditionally render delivery note */}
      {showNote && (
        <div className="bg-orange-50 py-3 px-4 rounded-lg text-sm text-slate-700 mt-2">
          This is a carbon-neutral delivery.
        </div>
      )}

      {/* Conditionally render confirm button */}
      {setShowModal && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-700 text-white font-medium rounded-full px-6 py-2 hover:bg-orange-800 transition text-sm md:text-base mt-2"
        >
          Confirm Order
        </button>
      )}
    </div>
  );
}
export default Cart;
