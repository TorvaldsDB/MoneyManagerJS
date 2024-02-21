import React from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/expense-context";

const AllExpenses = () => {
  const { expenses } = useExpenses();
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
