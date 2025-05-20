import image from './images/illustration-empty.svg'

function Form() {
 return (
   <form className='flex flex-col gap-4 justify-center items-start w-full'>
     <button type="button">Clear All</button>
     <div>
       <label htmlFor="amount">Mortgage Amount</label>
       <input type="number" name="amount" id="amount" />
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
     <img src={image} alt="calculation illustration" className="bg-blue-950" />
   </form>
 );
}

export default Form
