import Bar from "./BarChart"
import Total from "./Total"

function Card() {
 return (
  <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-lg">
    <h2 className="text-xl font-semibold">Spending - Last 7 days</h2>
   <Bar />
   <Total/>
  </div>
 )
}

export default Card
