import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import AuthLoadingOverlay from "../components/UI/Auth/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
    } finally {
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <AuthLoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
