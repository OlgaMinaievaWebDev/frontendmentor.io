import { useState } from "react";
import ModalConfirmation from "./components/ModalConfirmation";
import { CartProvider } from "./context/CartContext";
import Layout from "./Layout";
import { createPortal } from "react-dom";

function App() {

  const [showModal, setShowModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  return (
    <CartProvider>
      <div>
        <Layout
          setShowModal={setShowModal}
          setOrderConfirmed={setOrderConfirmed}
        />
        {showModal &&
          createPortal(
            <ModalConfirmation
              setShowModal={setShowModal}
              setOrderConfirmed={setOrderConfirmed}
              orderConfirmed={orderConfirmed}
            />,
            document.getElementById("modal-root")
          )}
      </div>
    </CartProvider>
  );
}

export default App
