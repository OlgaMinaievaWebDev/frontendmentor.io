
import { DollarSign } from 'lucide-react';
import { CalculatorIcon } from 'lucide-react';
import InputElement from './InputElement';
import Fieldset from './Fieldset';
import ResultSection from './ResultSection';


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
       iconPosition="left"
     />

     <InputElement
       label="Mortgage Term"
       id="term"
       name="term"
       type="number"
       icon="years"
       iconPosition="right"
     />

     <InputElement
       label="Interest Rate"
       id="percent"
       name="percent"
       type="number"
       icon="%"
       iconPosition="right"
     />

     <Fieldset
       legend="Mortgage Type"
       name="mortgageType"
       options={[
         { id: "repayment", value: "repayment", label: "Repayment" },
         { id: "interest", value: "interestOnly", label: "Interest Only" },
       ]}
     />

     <button
       type="submit"
       className="bg-[#d7da2f] hover:bg-lime-300 transition-colors duration-300 p-4 w-full rounded-3xl text-slate-800 text-lg font-semibold flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-lime-300 cursor-pointer"
     >
       <CalculatorIcon className="w-5 h-5" />
       Calculate Repayments
     </button>

 <ResultSection />
   </form>
 );
}

export default Form
