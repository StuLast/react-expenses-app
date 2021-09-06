
import moment from 'moment';
import {
  setTextFilter, 
  sortByDate, 
  sortByAmount,   
  setStartDate, 
  setEndDate
} from '../../actions/filters';

describe('Generate date filter actions', () => {

  it('should generate SET_START_DATE action object', () => { 
    const action = setStartDate(moment(0))
    expect(action).toEqual({
      type: "SET_START_DATE",
      startDate: moment(0)
    })
  });

  it('should generate SET_END_DATE action object', () => { 
    const action = setEndDate(moment(0))
    expect(action).toEqual({
      type: "SET_END_DATE",
      endDate: moment(0)
    })
  });

});

describe('Generate sort actions', ()=> {
  it('should generate SORT_BY_DATE action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
      type: "SORT_BY",
      sortBy: "date"
    })
  });

  it('should generate SORT_BY_AMOUNT action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
      type: "SORT_BY",
      sortBy: "amount"
    })
  });
});

describe('Generate text filter actions', () =>{

  it('should generate SET_TEXT_FILTER action object with search term', () => {
    const text = "My search term";
    const action = setTextFilter(text);
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text
    });
  })

  it('should generate SET_TEXT_FILTER action object with no search term', () => {
    const text = "";
    const action = setTextFilter(text);
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text
    });
  });

});