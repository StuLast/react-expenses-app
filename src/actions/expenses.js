import { push, ref } from "firebase/database";
import database from "../firebase/firebase";


//ACTIONS
//-------

//ADD_EXPENSE
const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense  
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = {description, note, amount, createdAt};

    return push(ref(database, 'expenses'), expense).then((ref)=> {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    })
  }
}

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export {
  addExpense,
  startAddExpense, 
  removeExpense,
  editExpense
}