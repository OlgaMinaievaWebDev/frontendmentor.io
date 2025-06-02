function Total() {
 return (
   <div className='flex justify-between items-center mt-3'>
    <div className='flex flex-col'>
    <p className='text-sm font-extralight text-brown-light '>Total this month</p>
    <p className="font-bold text-2xl">$478.33</p>
    </div>
   <div className="flex flex-col items-end justify-end">
    <p className="font-bold text-xs">+2.4%</p>
    <p className="text-xs text-brown-light">from last month</p>
  </div>
   </div>
 )
}

export default Total
