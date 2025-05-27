import emptyCartImage from '../assets/images/illustration-empty-cart.svg'

function Cart() {
 return (
   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto">
   <h2 className="text-lg font-bold text-orange-700">Your Cart (0)</h2>
   <img src={emptyCartImage} alt="empty cart" className='md:p-12 lg:p-16 p-20' />
   <p className='text-sm text-orange-800 text-center'>Your added items will appear here</p>
   </div>
 );
  // return (
  //   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto">
  //     <h2 className="text-lg font-bold text-orange-700">Your Cart (7)</h2>

  //     <ul className="flex flex-col gap-4">
  //       {/* Item 1 */}
  //       <li>
  //         <div className="flex justify-between items-start border-b border-slate-200 pb-2">
  //           <div>
  //             <p className="font-semibold text-sm">Classic Tiramisu</p>
  //             <div className="flex items-center gap-4 text-sm mt-1">
  //               <p className="text-amber-800 font-semibold">1x</p>
  //               <p>$5.50</p>
  //               <p>$5.50</p>
  //             </div>
  //           </div>
  //           <button className="w-5 h-5 rounded-full border border-slate-500 flex justify-center items-center hover:font-bold text-xs">
  //             X
  //           </button>
  //         </div>
  //       </li>

  //       {/* Item 2 */}
  //       <li>
  //         <div className="flex justify-between items-start border-b border-slate-200 pb-2">
  //           <div>
  //             <p className="font-semibold text-sm">Vanilla Bean Creme Brulee</p>
  //             <div className="flex items-center gap-4 text-sm mt-1">
  //               <p className="text-amber-800 font-semibold">4x</p>
  //               <p>$7</p>
  //               <p>$28</p>
  //             </div>
  //           </div>
  //           <button className="w-5 h-5 rounded-full border border-slate-500 flex justify-center items-center hover:font-bold text-xs">
  //             X
  //           </button>
  //         </div>
  //       </li>

  //       {/* Item 3 */}
  //       <li>
  //         <div className="flex justify-between items-start border-b border-slate-200 pb-2">
  //           <div>
  //             <p className="font-semibold text-sm">Vanilla Pana Cotta</p>
  //             <div className="flex items-center gap-4 text-sm mt-1">
  //               <p className="text-amber-800 font-semibold">2x</p>
  //               <p>$6.50</p>
  //               <p>$13</p>
  //             </div>
  //           </div>
  //           <button className="w-5 h-5 rounded-full border border-slate-500 flex justify-center items-center hover:font-bold text-xs">
  //             X
  //           </button>
  //         </div>
  //       </li>

  //       {/* Total */}
  //       <li className="flex justify-between items-center pt-2">
  //         <p className="text-sm font-medium">Order Total</p>
  //         <p className="text-slate-800 font-bold">$46.50</p>
  //       </li>
  //     </ul>

  //     {/* Delivery Note */}
  //     <div className="bg-orange-50 py-3 px-4 rounded-lg text-sm text-slate-700 mt-2">
  //       This is a carbon-neutral delivery.
  //     </div>

  //     {/* Confirm Order Button */}
  //     <button
  //       className="
  //        bg-orange-700 text-white font-medium 
  //        rounded-full px-6 py-2 
  //        hover:bg-orange-800 transition 
  //        text-sm md:text-base mt-2
  //      "
  //     >
  //       Confirm Order
  //     </button>
  //   </div>
  // );
}

export default Cart;
