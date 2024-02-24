import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { useAuth } from "../store/auth-context";

function MeScreen() {
  const { logout } = useAuth();
  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.content} onPress={logout}>
        <Text style={styles.title}>Exit</Text>
        <IconButton icon="exit" size={24} color="white" />
      </Pressable>
    </View>
  );
}

export default MeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
