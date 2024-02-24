import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useAuth } from "../store/auth-context";

function MeScreen() {
  const { logout } = useAuth();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Exit</Text>
        <IconButton icon="exit" size={24} color="white" onPress={logout} />
      </View>
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
