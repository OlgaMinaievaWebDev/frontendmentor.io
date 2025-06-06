import { DollarSign } from "lucide-react";
import { CalculatorIcon } from "lucide-react";
import InputElement from "./InputElement";
import Fieldset from "./Fieldset";
import { useRef, useState } from "react";
import { calculateLoan } from "../utils/calculationLoan";

function Form({ setResult }) {
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newErrors = {};
    if (!data.amount) newErrors.amount = "Mortgage amount is required";
    if (!data.term) newErrors.term = "Mortgage term is required";
    if (!data.percent) newErrors.percent = "Interest rate is required";
    if (!data.mortgageType)
      newErrors.mortgageType = "Mortgage type is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const result = calculateLoan(
      data.amount,
      data.term,
      data.percent,
      data.mortgageType
    );
    setResult(result);
  };

  const handleClearAll = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setErrors({});
    setResult(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value && errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-start w-full text-slate-500"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <button type="button" className="underline" onClick={handleClearAll}>
        Clear All
      </button>

      <InputElement
        label="Mortgage Amount"
        id="amount"
        name="amount"
        type="number"
        icon={<DollarSign size={16} />}
        iconPosition="left"
        error={errors.amount}
        onChange={handleInputChange}
      />

      <div className="w-full flex flex-col md:flex-row md:gap-4">
        <InputElement
          label="Mortgage Term"
          id="term"
          name="term"
          type="number"
          icon="years"
          iconPosition="right"
          error={errors.term}
          onChange={handleInputChange}
          className="md:flex-1"
        />

        <InputElement
          label="Interest Rate"
          id="percent"
          name="percent"
          type="number"
          step="0.01"
          icon="%"
          iconPosition="right"
          error={errors.percent}
          onChange={handleInputChange}
          className="md:flex-1"
        />
      </div>

      <Fieldset
        legend="Mortgage Type"
        name="mortgageType"
        options={[
          { id: "repayment", value: "repayment", label: "Repayment" },
          { id: "interest", value: "interestOnly", label: "Interest Only" },
        ]}
        error={errors.mortgageType}
      />

      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className="bg-[#d7da2f] hover:bg-lime-300 transition-colors duration-300 p-4 w-full rounded-3xl text-slate-800 text-lg font-semibold flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-lime-300 cursor-pointer md:w-[80%]"
      >
        <CalculatorIcon className="w-5 h-5" />
        Calculate Repayments
      </button>
    </form>
  );
}

export default Form;
