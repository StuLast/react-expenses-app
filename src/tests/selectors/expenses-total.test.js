import moment from 'moment';

import selectExpensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

describe('Expenses Total selector:', () => {

  it('should return 0 when no args are provided', ()=> {
    const totalExpenses = selectExpensesTotal();
    expect(totalExpenses).toBe(0);
  });

  it('should return 0 when empty array is provided', ()=> {
    const totalExpenses = selectExpensesTotal([]);
    expect(totalExpenses).toBe(0);
  });

  it('should return single expense value when 1 expense is filtered/selected', ()=> {
    const visibleExpenses = [expenses[1]];
    const totalExpenses = selectExpensesTotal(visibleExpenses);
    expect(totalExpenses).toBe(109500);
  });

  it('should return a combined expense value when >1 expense is filtered/selected', ()=> {
    const visibleExpenses = [expenses[3], expenses[4]];
    const totalExpenses = selectExpensesTotal(visibleExpenses);
    expect(totalExpenses).toBe(42000);
  });
});

