import axios from "axios";

export const storeExpense = async (expenseData) => {
  try {
    const response = await axios.post(
      "https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
      expenseData
    );

    const id = response.data.name;

    return id;
  } catch (error) {
    console.log(error);
  }
};

export const fetchExpenses = async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const updateExpense = async (id, expenseData) => {
  try {
    const response = await axios.put(
      `https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${id}.json`,
      expenseData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(
      `https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
