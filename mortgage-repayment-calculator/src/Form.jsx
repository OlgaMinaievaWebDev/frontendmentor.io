import image from '../src/assets/images/illustration-empty.svg'
import { DollarSign } from 'lucide-react';
function Form() {
 return (
   <form className="flex flex-col gap-4 items-start w-full text-slate-500">
     <button type="button" className="underline">
       Clear All
     </button>
     <div className="flex flex-col w-full gap-2">
       <label htmlFor="amount">Mortgage Amount</label>
       
       <div className="flex flex-row items-center border border-slate-500 rounded-md  h-10">
         <DollarSign className="text-slate-500 bg-slate-200 h-full w-10 p-2 rounded-l-md " />
         <input
           type="number"
           name="amount"
           id="amount"
           className="flex-1 outline-none bg-transparent"
         />
       </div>
     </div>
     <div>
       <label htmlFor="term">Mortgage Term</label>
       <input type="number" name="term" id="term" />
     </div>
     <div>
       <label htmlFor="percent">Interest rate</label>
       <input type="number" name="percent" id="percent" step="0.01" />
     </div>

     <fieldset>
       <legend>Mortgage Type</legend>
       <label htmlFor="repayment">
         <input type="checkbox" name="repayment" /> Repayment
       </label>
       <label htmlFor="interest">
         <input type="checkbox" name="Interest only" /> Interest Only
       </label>
     </fieldset>

     <button type="submit">Calculate Repayments</button>
     <img src={image} alt="calculation illustration" />
   </form>
 );
}

export default Form
