import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore";
import { addExpense,  removeExpense,  editExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";


import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});



ReactDOM.render(<AppRouter />, document.getElementById("app"));

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: "100", createdAt: 1000 })
);


const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: "300", createdAt: -1000 })
);

const expenseThree = store.dispatch(
  addExpense({ description: "water", amount: "5000", createdAt: 10000 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter(""));


store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());

store.dispatch(sortByAmount());
