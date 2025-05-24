export function calculateLoan(
  amount,
  years,
  percent,
  mortgageType = "repayment"
) {
  const principal = parseFloat(amount);
  const interestRate = parseFloat(percent) / 100 / 12; // monthly
  const numberOfPayments = parseInt(years) * 12;

  if (mortgageType === "interestOnly") {
    const monthly = principal * interestRate;
    const total = monthly * numberOfPayments;
    return {
      monthlyPayment: monthly.toFixed(2),
      totalPayment: total.toFixed(2),
    };
  }

  if (interestRate === 0) {
    const monthly = principal / numberOfPayments;
    return {
      monthlyPayment: monthly.toFixed(2),
      totalPayment: principal.toFixed(2),
    };
  }

  const monthlyPayment =
    (principal * interestRate * Math.pow(1 + interestRate, numberOfPayments)) /
    (Math.pow(1 + interestRate, numberOfPayments) - 1);

  const totalPayment = monthlyPayment * numberOfPayments;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
  };
}
