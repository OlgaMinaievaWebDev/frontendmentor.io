import Cart from "./components/Cart";
import DessertCard from "./components/DessertCard";

function Layout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 bg-orange-50">
      <div className="w-full md:w-3/4 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Desserts</h1>
        <DessertCard />
      </div>
      <div className="w-full md:w-1/4">
        <Cart />
      </div>
    </div>
  );
}

export default Layout;
