import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>
    This is from my Dashboard Component
  </div>
)

const AddExpensePage = () => (
  <div>
    This is from my Add Expense Component
  </div>
)

const routes =  (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} /> 
    </div>
  </BrowserRouter>
);

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(routes, document.getElementById("app"));

