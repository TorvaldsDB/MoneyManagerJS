import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { getDateMinusDays, getFormattedDate } from "../../util/date";
import Input from "./Input";
import Button from "../UI/Button";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const defaultInputValues = defaultValues
    ? {
        amount: defaultValues.amount.toString(),
        date: getFormattedDate(defaultValues.date),
        description: defaultValues.description,
      }
    : {
        amount: "",
        date: getFormattedDate(
          getDateMinusDays(new Date(), Math.floor(Math.random() * 100) + 1)
        ),
        description: "",
      };
  const [inputValues, setInputValues] = useState(defaultInputValues);
  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputIdentifier]: enteredValue,
    }));
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const accountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!accountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }
    onSubmit(expenseData);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>You Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            keyboardType: "default",
            minLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          value: inputValues.description,
          onChangeText: inputChangeHandler.bind(this, "description"),
          // autoCorrect: false,
          // autoCapitalize: "none",
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: { marginTop: 40 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: { flex: 1 },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
