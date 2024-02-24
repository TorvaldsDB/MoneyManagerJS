import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import AuthLoadingOverlay from "../components/UI/Auth/LoadingOverlay";
import { useAuth } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { authenticate } = useAuth();

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authenticate(token);
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
