import React from "react";
import { StyleSheet } from "react-native";
import { DUMMY_EXPENSES } from "../constants/mockData";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
