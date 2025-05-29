
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import { useContext } from "react";
import CartContext from "../context/CartContext";


function DessertItem({product, index}) {

 const { dispatch } = useContext(CartContext);
 const handleAddToCart = (product) => {
   dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
 };

 const handleRemoveItem = (product) => {
   dispatch({ type: "REMOVE_ITEM_COMPLETELY", payload: product });
 }
  return (
    <>
      <li key={index} className="flex flex-col">
        <div className="relative w-full aspect-[325/210] sm:aspect-[350/220] lg:aspect-[370/230]">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={product.image.desktop}
            />
            <source media="(min-width: 640px)" srcSet={product.image.tablet} />
            <img
              src={product.image.mobile}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </picture>
          <button
            onClick={() => handleAddToCart(product)}
            className="
    absolute -bottom-5 left-1/2 transform -translate-x-1/2 
    border border-amber-800 rounded-3xl 
    py-2 px-6 text-sm 
    sm:px-6 sm:text-sm 
    md:px-4 md:py-2 md:text-xs 
    lg:px-4 lg:py-2 lg:text-xs 
    bg-white z-10 flex justify-center items-center gap-2 shadow
  "
          >
            <img
              src={cartIcon}
              alt="cart icon"
              className="w-4 h-4 md:w-3 md:h-3"
            />
            Add to Cart
          </button>
        </div>

        <div className="px-4 pt-6 pb-4 text-center sm:text-left">
          <p className="text-slate-400 text-sm">{product.category}</p>
          <p className="font-semibold text-base">{product.name}</p>
          <p className="text-amber-800 font-semibold text-base">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </li>
    </>
  );
}

export default DessertItem;
