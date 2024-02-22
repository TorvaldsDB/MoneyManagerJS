import axios from "axios";

// 定义数据库URL常量
const BASE_URL =
  "https://money-manager-2024-default-rtdb.asia-southeast1.firebasedatabase.app/";

// 存储开支
export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BASE_URL}expenses.json`, expenseData);
  return response.data.name;
};

// 获取开支
export const fetchExpenses = async () => {
  const response = await axios.get(`${BASE_URL}expenses.json`);

  return Object.entries(response.data).map(([id, expense]) => ({
    id,
    amount: expense.amount,
    date: new Date(expense.date),
    description: expense.description,
  }));
};

// 更新开支
export const updateExpense = async (id, expenseData) => {
  const url = `${BASE_URL}expenses/${id}.json`;
  const response = await axios.put(url, expenseData);
  return response.data;
};

// 删除开支
export const deleteExpense = async (id) => {
  const url = `${BASE_URL}expenses/${id}.json`;
  const response = await axios.delete(url);
  return response.data;
};
