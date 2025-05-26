function Result() {
 return (
  <div className="w-full md:w-1/2 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white text-center p-12 rounded-3xl md:rounded-3xl flex flex-col items-center justify-center gap-4 ">
   <h1 className="text-2xl font-semibold text-indigo-300">Your Result</h1>
   <div className="rounded-full w-44 h-44 bg-gradient-to-b from-indigo-800 to-indigo-600 shadow flex flex-col items-center justify-center gap-2 m-4">
    <p className="text-6xl font-extrabold">76</p>
    <p className=" text-indigo-300"> of 100</p>
   </div>
    <p className="text-3xl font-bold">Great</p>
    <p className="text-lg text-indigo-300">You scored higher than 65% of the people who have taken these tests</p>
  </div>
 )
}

export default Result
