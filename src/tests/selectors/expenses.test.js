import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


describe('get filtered data', () => {
  
  it('should filter by text value', () => {
    const filters = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[4], expenses[3], expenses[2], expenses[1]]);
  });

  it('should filter by start date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[4], expenses[3], expenses[2], expenses[0]]);
  });

  it('should filter by end date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0)
    }
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[1]]);
  });

  it('should sort by date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[4], expenses[3], expenses[2], expenses[0], expenses[1]]);
  });

  it('should sort by amount', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[4], expenses[3], expenses[2], expenses[0]]);
  });

});



