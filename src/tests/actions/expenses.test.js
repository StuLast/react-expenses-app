import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ref, get, set } from "firebase/database";

import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "testUID";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
  const dbRef = ref(database, `users/${uid}/expenses`);
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt,
    };
  });
  set(dbRef, expensesData).then();
});

describe("Generate add expense actions", () => {
  it("should setup ADD_EXPENSE action object with provided values", () => {
    const expenseData = expenses[3];

    const action = addExpense(expenseData);

    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: expenseData,
    });
  });
});

describe("Async expense action generators", () => {
  it("should add expense to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
      description: "mouse",
      amount: 3000,
      note: "This is a good mouse",
      createdAt: 1000,
    };

    store
      .dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "ADD_EXPENSE",
          expense: {
            id: expect.any(String),
            ...expenseData,
          },
        });
        return get(
          ref(database, `users/${uid}/expenses/${actions[0].expense.id}`)
        );
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  it("should add expense with defaults to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
      description: "",
      amount: 0,
      note: "",
      createdAt: 0,
    };

    store
      .dispatch(startAddExpense({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "ADD_EXPENSE",
          expense: {
            id: expect.any(String),
            ...expenseDefault,
          },
        });
        return get(
          ref(database, `users/${uid}/expenses/${actions[0].expense.id}`)
        );
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
      });
  });
});

describe("Fetch expense data from database and set redux state", () => {
  it("should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
  });

  it("should fetch data from database", (done) => {
    const store = createMockStore(defaultAuthState);
    store
      .dispatch(startSetExpenses())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "SET_EXPENSES",
          expenses,
        });
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

describe("Generate edit expense actions", () => {
  it("should set up EDIT_EXPENSE action object", () => {
    const action = editExpense("123abc", {
      description: "Change the description",
      amount: 10000,
      note: "Change the note",
    });

    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: "123abc",
      updates: {
        description: "Change the description",
        amount: 10000,
        note: "Change the note",
      },
    });
  });

  it("should edit expense in database", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updates = {
      note: "Final rent payment",
    };
    store
      .dispatch(startEditExpense(id, updates))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "EDIT_EXPENSE",
          id,
          updates,
        });
        return get(ref(database, `users/${uid}/expenses/${id}`));
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual({
          description: expenses[1].description,
          note: expenses[1].note,
          amount: expenses[1].amount,
          createdAt: expenses[1].createdAt,
          ...updates,
        });
        done();
      });
  });
});

describe("Generate remove expense actions", () => {
  it("should setup REMOVE_EXPENSE action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      id: "123abc",
    });
  });

  it("should remove expense from database", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store
      .dispatch(startRemoveExpense({ id }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "REMOVE_EXPENSE",
          id,
        });
        return get(ref(database, `users/${uid}/expenses/${id}`));
      })
      .then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
      });
  });
});
