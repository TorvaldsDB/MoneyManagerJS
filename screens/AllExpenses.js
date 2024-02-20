import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES } from "../constants/mockData";

const AllExpenses = () => {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
