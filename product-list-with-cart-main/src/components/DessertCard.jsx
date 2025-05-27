import { productData } from "../data";
import cartIcon from "../assets/images/icon-add-to-cart.svg";

function DessertCard() {
 return (
   <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {productData.map((product, index) => (
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
     ))}
   </ul>
 );
}

export default DessertCard;
