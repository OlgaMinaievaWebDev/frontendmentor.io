import image from "../assets/images/illustration-empty.svg";
import { formatCurrency } from "../utils/formatCurrency";
function ResultSection({ result }) {
  if(!result) {
  return (
    <div className="bg-slate-800 flex flex-col items-center w-full p-6 gap-4 mt-4 h-full rounded-bl-[50px]">
      <img src={image} alt="calculation illustration" className="max-w-xs" />
      <h2 className="text-center text-white text-2xl font-semibold">
        Results shown here
      </h2>
      <p className="text-slate-400 text-center text-lg max-w-md">
        Complete the form and click 'calculate repayments' to see what your
        monthly repayments would be
      </p>
    </div>
  );
  }
  return (
    <div className="bg-slate-700 flex flex-col w-full p-6 gap-2 mt-4 text-white">
      <h2 className="text-xl font-semibold">Your results</h2>
      <div>
        <p className="text-slate-400 text-sm mb-3">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click 'calculate repayments'
          again.
        </p>
      </div>
      <div className="bg-slate-800 border-t-4 border-[#d7da2f] rounded-lg">
        <div className="flex flex-col justify-center p-4 gap-1.5">
          <p className="text-sm text-slate-400">You monthly repayments</p>
          <p className="text-3xl text-[#d7da2f] ">
            {formatCurrency(result.monthlyPayment)}
          </p>
        </div>
        <div className="bg-slate-400 h-[1px] w-[90%] m-auto"></div>
        <div className="flex flex-col justify-center p-4 gap-1.5">
          <p className="text-sm text-slate-400">
            Total you'll pay over the term
          </p>
          <p className="text-lg">{formatCurrency(result.totalPayment)}</p>
        </div>
      </div>
    </div>
  );

}

export default ResultSection;
