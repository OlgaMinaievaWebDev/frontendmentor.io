import image from "../assets/images/illustration-empty.svg";

function ResultSection() {
  return (
    <div className="bg-slate-800 flex flex-col items-center w-full p-6 gap-4 mt-4">
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

export default ResultSection;
