import logo from '../assets/images/logo.svg'

function Balance() {
 return (
  <div className='bg-red-intense rounded-2xl p-6 flex text-white justify-between items-center'>
   <div className='flex flex-col gap-2'>
   <p className='text-sm font-extralight'>My balance</p>
   <p>$921.48</p>
   </div>
   <img src={logo} alt="logo icon" />
  </div>
 )
}

export default Balance
