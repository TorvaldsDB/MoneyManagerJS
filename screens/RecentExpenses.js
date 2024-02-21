import React from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const { expenses } = useExpenses();

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
