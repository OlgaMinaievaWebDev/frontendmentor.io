import image from '../src/assets/images/illustration-empty.svg'

function Form() {
 return (
   <form className='flex flex-col gap-4 items-start w-full text-slate-500'>
     <button type="button" className='underline'>Clear All</button>
     <div className='flex flex-col w-full gap-2'>
       <label htmlFor="amount">Mortgage Amount</label>
       <input type="number" name="amount" id="amount"  className='border border-slate-500 h-10 rounded-md'/>
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
   
     <button type='submit'>Calculate Repayments</button>
     <img src={image} alt="calculation illustration" />
   </form>
 );
}

export default Form
