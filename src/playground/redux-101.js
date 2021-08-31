import { createStore } from "redux";

//ACTION GENERATORS

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

const setCount = ({ setCount = 0 } = {}) => {
  return {
    type: "SET",
    setCount,
  };
};

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.setCount,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//DISPATCHERS

//Increment
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//Reset
store.dispatch(resetCount());

//Decrement
store.dispatch(decrementCount({ decrementBy: 10 }));

//SetCount
store.dispatch(setCount({ setCount: 100 }));

unsubscribe();
