import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

const ExpenseForm = () => {
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: (text) => {},
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: (text) => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          onChangeText: (text) => {},
          multiline: true,
          // autoCorrect: false,
          // autoCapitalize: "none",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
