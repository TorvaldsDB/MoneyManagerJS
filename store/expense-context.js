import { createContext, useContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE_EXPENSE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    // return state.map((expense) =>
    //   expense.id === action.payload.id
    //     ? { ...expense, ...action.payload.data }
    //     : expense
    // );
    default:
      return state;
  }
};
const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD_EXPENSE", payload: expenseData });
  };
  const updateExpense = (expenseId, expenseData) => {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: { id: expenseId, data: expenseData },
    });
  };
  const deleteExpense = (expenseId) => {
    dispatch({ type: "DELETE_EXPENSE", payload: expenseId });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpensesContext);
  if (!context) {
    throw new Error("useExpenses must be used within a ExpensesProvider");
  }
  return context;
};

export default ExpensesContextProvider;
