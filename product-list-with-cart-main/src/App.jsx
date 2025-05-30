import { useState } from "react";
import ModalConfirmation from "./components/ModalConfirmation";
import { CartProvider } from "./context/CartContext";
import Layout from "./Layout";
import { createPortal } from "react-dom";

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <CartProvider>
      <div>
        <Layout setShowModal={setShowModal} />
        {showModal && createPortal(
          <ModalConfirmation />,
          document.getElementById("modal-root")
        )}
      </div>
    </CartProvider>
  );
}

export default App
