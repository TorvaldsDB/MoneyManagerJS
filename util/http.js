import axios from "axios";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(
    "https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
    expenseData
  );

  const id = response.data.name;

  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(
    "https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json"
  );

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpense = async (id, expenseData) => {
  const response = await axios.put(
    `https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${id}.json`,
    expenseData
  );
  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await axios.delete(
    `https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${id}.json`
  );
  return response.data;
};
