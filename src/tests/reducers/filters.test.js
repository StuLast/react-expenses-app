import moment from 'moment'
import filtersReducer from '../../reducers/filters';


describe('Setup filters reducer', () => {

  it('should initialize default filters reducer', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        text: "",
        sortBy: "date", //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
  });

});

describe ('set Sorting', () =>{
  it('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY', sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
  });

  it('should set sortBy to date', () => {
    const currentState = {
      text: "",
      sortBy: "amount", //date or amount
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    }

    const state = filtersReducer(currentState, {type: 'SORT_BY', sortBy: 'date'});

    expect(state.sortBy).toBe('date');
  });
});

describe('set Filters', () => {

  it('should set text filter', () => {
    const text = 'Rent'
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text);
  });

  it('should clear text filter', () => {
    const text = '';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER'}, text);
    expect(state.text).toBe(undefined);
  });

  it('should set startDate filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
    expect(state.startDate).toEqual(startDate);
  });

  it('should set endDate filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
    expect(state.endDate).toEqual(endDate);
  });

})