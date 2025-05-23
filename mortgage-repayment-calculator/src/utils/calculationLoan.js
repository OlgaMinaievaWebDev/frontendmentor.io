export function calculateLoan(amount, years, percent) {
  const principal = parseFloat(amount);
  const interestRate = parseFloat(percent) / 100 / 12; // monthly rate
  const numberOfPayments = parseInt(years) * 12;

  if (interestRate === 0) {
    // No interest case
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
