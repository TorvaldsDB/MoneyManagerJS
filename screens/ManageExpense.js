import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useExpenses } from "../store/expense-context";
import {
  storeExpense,
  updateExpense as updateRemoteExpense,
  deleteExpense as deleteRemoteExpense,
} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { deleteExpense, addExpense, updateExpense, expenses } = useExpenses();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = editedExpenseId
    ? expenses.find((expense) => expense.id === editedExpenseId)
    : null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  });

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteRemoteExpense(editedExpenseId);
      deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - please try again later!");
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        updateExpense(editedExpenseId, expenseData);
        await updateRemoteExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save expense - please try again later!");
      setIsSubmitting(false);
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
