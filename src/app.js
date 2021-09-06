import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

//Test actions
//============

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: "1095", createdAt: 4500 })
);

const expenseTwo = store.dispatch(
  addExpense({ description: "gas bill", amount: "300", createdAt: 1000 })
);

const expenseThree = store.dispatch(
  addExpense({ description: "water bill", amount: "5000", createdAt: 109500 })
);
