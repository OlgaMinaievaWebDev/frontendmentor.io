import { productData } from "../../data"

function DessertCard() {
 return (
   <div>
     {productData.map((product, index) => (
       <li key={index}>
         <img
           src={product.image.desktop}
           alt={product.name}
           className="w-full h-40 object-cover rounded-md mb-2"
         />
         <button>Add</button>
         <p>{product.category}</p>
         <p>{product.name}</p>
         <p>{product.price}</p>
       </li>
     ))}
   </div>
 );
}

export default DessertCard
