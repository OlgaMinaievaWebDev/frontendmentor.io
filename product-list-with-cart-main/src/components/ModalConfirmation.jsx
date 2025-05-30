import { useContext } from "react";
import CartContext from "../context/CartContext";
import iconOrderConfirmed from "../assets/images/icon-order-confirmed.svg";
import Cart from "./Cart";

function ModalConfirmation({
  setShowModal,
  setOrderConfirmed,
  orderConfirmed,
}) {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems } = state;

  if (!orderConfirmed || cartItems.length === 0) return null;

  const handleStartNewOrder = () => {
    dispatch({ type: "CLEAR_CART" });
    setShowModal(false);
    setOrderConfirmed(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <img
        src={iconOrderConfirmed}
        alt="Order Confirmed"
        className="w-12 h-12 mb-4"
      />
      <h3 className="text-lg font-bold mb-4">Order Confirmed</h3>
      <p className="mb-4">We hope you enjoy your food</p>

      <Cart showTitle={false} showNote={false} />

      <button
        onClick={handleStartNewOrder}
        className="bg-orange-700 text-white font-medium rounded-full px-6 py-2 hover:bg-orange-800 transition text-sm md:text-base mt-4 w-full "
      >
        Start New Order
      </button>
    </div>
  );
}

export default ModalConfirmation;
