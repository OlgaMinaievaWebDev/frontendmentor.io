import QRImg from '../src/images/image-qr-code.png'

function QRCard() {
 return (
   <div className="w-[300px] rounded-2xl p-4 pb-8 shadow-lg bg-white-100">
     <div className="flex flex-col items-center gap-5 text-center">
       <img src={QRImg} alt="QR code image" className="w-full rounded-xl" />
       <div className="px-4 space-y-4">
         <h1 className="text-xl font-bold text-slate-900 leading-tight">
           Improve your front-end skills by building projects
         </h1>
         <p className="text-md text-slate-500 px-2 mb-2">
           Scan Qr code to visit Frontend Mentor and take your coding skills to
           next level
         </p>
       </div>
     </div>
   </div>
 );
}

export default QRCard
