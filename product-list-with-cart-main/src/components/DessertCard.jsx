import { productData } from "../data";
import cartIcon from "../assets/images/icon-add-to-cart.svg";

function DessertCard() {
 return (
   
     <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {productData.map((product, index) => (
         <li key={index} className="flex flex-col items-start">
           <div className="relative w-[325px] h-[210px]">
             <img
               src={product.image.desktop}
               alt={product.name}
               className="w-full h-full object-cover"
             />

             {/* Button moved inside relative container */}
             <button className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 border border-amber-800 rounded-3xl py-2 px-6 bg-white z-10 flex justify-center items-center gap-2 shadow">
               <img src={cartIcon} alt="cart icon" className="w-5 h-5" />
               Add to Cart
             </button>
           </div>

           <div className="px-4 pt-6 pb-4">
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
