import { productData } from "../data";
import DessertItem from "./DessertItem";

function DessertCard() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productData.map((product, index) => (
        <DessertItem key={index} product={product} />
      ))}
    </ul>
  );
}

export default DessertCard;
