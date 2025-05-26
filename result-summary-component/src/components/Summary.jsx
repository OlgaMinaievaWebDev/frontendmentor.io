import List from "./List"

function Summary() {
 return (
   <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-12 gap-4">
     <h1 className="text-2xl font-semibold text-blue-950">Summary</h1>
     <List />
     <button className="bg-blue-950 w-full text-white text-xl py-2 px-20 rounded-4xl cursor-pointer hover:bg-blue-800 transition-colors duration-300">
       Continue
     </button>
   </div>
 );
}

export default Summary
