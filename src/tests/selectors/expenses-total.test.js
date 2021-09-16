import { exportAllDeclaration } from '@babel/types';
import expensesTotal from '../../selectors/expenses-total'

describe('Expenses Total selector', () => {
  it('should return 0 for no selected expenses', ()=> {
    const totalExpenses = expensesTotal();
    expect(totalExpenses).toBe(0);
  });
});

