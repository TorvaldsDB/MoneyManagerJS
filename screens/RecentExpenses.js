import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import { useExpenses } from "../store/expense-context";

const RecentExpenses = () => {
  const { expenses, setExpenses } = useExpenses();

  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchExpenses();

        setExpenses(expenses);
      } catch (error) {
        console.error("获取费用数据时发生错误:", error);
      }
    }

    getExpenses();
  }, []);

  const recentExpenses = expenses.filter(
    (expense) =>
      expense.date > getDateMinusDays(new Date(), 7) &&
      expense.date <= new Date()
  );

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
