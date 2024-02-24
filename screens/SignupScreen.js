import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import AuthLoadingOverlay from "../components/UI/Auth/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user. Please check your input and try again later!"
      );
    } finally {
      setIsAuthenticating(false);
    }

    if (isAuthenticating) {
      return <AuthLoadingOverlay message="Creating user..." />;
    }

    return <AuthContent onAuthenticate={signupHandler} />;
  };
}

export default SignupScreen;
