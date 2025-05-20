import image from '../src/assets/images/illustration-empty.svg'
import { DollarSign } from 'lucide-react';
import InputElement from './InputElement';
function Form() {
 return (
   <form className="flex flex-col gap-4 items-start w-full text-slate-500">
     <button type="button" className="underline">
       Clear All
   </button>

   {/* Input Elements */}
   <InputElement
    label="Mortgage Amount"
    id="amount"
    name="amount"
    type="number"
    icon={<DollarSign size={16} />}
    iconPosition="left" />
   
   <InputElement 
      label="Mortgage Term"
      id="term"
      name="term"
      type="number"
      icon="years"
    iconPosition="right" />
   
   <InputElement 
     label="Interest Rate"
     id="percent"
     name="percent"
     type="number"
     icon="%"
     iconPosition="right" />
    
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
