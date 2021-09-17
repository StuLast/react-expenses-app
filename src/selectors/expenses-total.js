const selectExpensesTotal = (visibleExpenses = []) => {
  if(visibleExpenses.length === 0 ) {
    return 0;
  };
  return  visibleExpenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};

export default selectExpensesTotal;