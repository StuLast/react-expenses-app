import moment from 'moment';

import { getExpensesTotal } from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

describe('Expenses Total selector:', () => {

  it('should return 0 when no args are provided', ()=> {
    const totalExpenses = getExpensesTotal();
    expect(totalExpenses).toBe(0);
  });

  it('should return 0 when empty array is provided', ()=> {
    const totalExpenses = getExpensesTotal([]);
    expect(totalExpenses).toBe(0);
  });

  it('should return single expense value when 1 expense is filtered/selected', ()=> {
    const filters = {
        text: 'Rent',
        sortBy: 'amount',
        startDate: moment(0),
        endDate:  moment(0).add(3, 'days')
    };
    const visibleExpenses = [expenses[1]];
    const totalExpenses = getExpensesTotal(visibleExpenses);
    expect(totalExpenses).toBe(109500);
  });

  it('should return a combined expense value when >1 expense is filtered/selected', ()=> {
    const filters = {
        text: 'Hardware',
        sortBy: 'amount',
        startDate: moment(0),
        endDate:  moment(0).add(10, 'days')
    };
    const visibleExpenses = [expenses[3], expenses[4]];
    const totalExpenses = getExpensesTotal(visibleExpenses);
    expect(totalExpenses).toBe(42000);
  });
});

