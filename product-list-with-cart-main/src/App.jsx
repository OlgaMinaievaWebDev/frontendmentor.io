import { CartProvider } from "./context/CartContext";
import Layout from "./Layout";

function App() {
  return (
    <CartProvider>

    <div>
      <Layout/>
    </div>
    </CartProvider>
  );
}

export default App
