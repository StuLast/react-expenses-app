import { push, ref, get, remove, update } from "firebase/database";
import database from "../firebase/firebase";
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSES } from "./types";

//ACTIONS
//-------

//ADD_EXPENSE
const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return push(ref(database, `users/${uid}/expenses`), expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        })
      );
    });
  };
};

//REMOVE_EXPENSE

const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const dataPath = `users/${uid}/expenses/${id}`;
    const expensesRef = ref(database, dataPath);
    return remove(expensesRef).then(() => {
      dispatch(
        removeExpense({
          id,
        })
      );
    });
  };
};

const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id,
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates,
});

const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const dataPath = `users/${uid}/expenses/${id}`;
    const dataRef = ref(database, dataPath);
    return update(dataRef, updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch((err) => { });
  };
};

//SET_EXPENSES

const startSetExpenses = () => {
  return (dispatch, getAuth) => {
    const uid = getAuth().auth.uid;
    const expensesRef = ref(database, `users/${uid}/expenses`);
    return get(expensesRef).then((snapshot) => {
      const expenseArray = [];

      snapshot.forEach((childSnapshot) => {
        expenseArray.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });

      dispatch(setExpenses(expenseArray));
    });
  };
};

const setExpenses = (expenses) => ({
  type: SET_EXPENSES,
  expenses,
});

export {
  addExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
};
