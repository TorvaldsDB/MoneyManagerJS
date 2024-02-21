import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: GlobalStyles.colors.primary100,
  },
  input: {
    fontSize: 18,
    padding: 6,
    borderRadius: 6,
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
