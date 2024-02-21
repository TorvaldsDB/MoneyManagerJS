import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getDateMinusDays, getFormattedDate } from "../../util/date";
import Input from "./Input";

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputIdentifier]: enteredValue,
    }));
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
            defaultValue: getFormattedDate(
              getDateMinusDays(new Date(), Math.floor(Math.random() * 100) + 1)
            ),
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
});
