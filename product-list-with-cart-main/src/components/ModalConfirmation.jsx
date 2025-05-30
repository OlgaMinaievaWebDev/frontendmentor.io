import Cart from "./Cart";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import iconOrderConfirmed from "../assets/images/icon-order-confirmed.svg";

function ModalConfirmation() {
  const { state } = useContext(CartContext);
  const { cartItems } = state;

  if (cartItems.length === 0) return null;

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img
          src={iconOrderConfirmed}
          alt="Order Confirmed"
          className="w-12 h-12 mb-4"
        />
        <h3 className="text-lg font-bold mb-4">Order Confirmed</h3>
        <p className="mb-4">We hope you enjoy your food</p>

        <Cart showTitle={false} showNote={false} />
      </div>
    </>
  );
}

export default ModalConfirmation;
