import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense,  removeExpense,  editExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

//Test actions
//============


const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: "1095", createdAt: 4500})
);

const expenseTwo = store.dispatch(
  addExpense({ description: "gas bill", amount: "300", createdAt: 1000 })
);

const expenseThree = store.dispatch(
  addExpense({ description: "water bill", amount: "5000", createdAt: 109500 })
);



store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());

store.dispatch(sortByAmount());


setTimeout(()=> {
  store.dispatch(setTextFilter("bill"));
}, 3000)
