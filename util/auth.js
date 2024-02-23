import axios from "axios";
API_KEY = "AIzaSyBYR-l69noUJfOxrns4v0KkfT_Q3IBrVs0";
// Sign up API https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// Post method
// Body email, password, returnSecureToken
// Help to write a method: createUser

export const createUser = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  const token = response.data.idToken;
};
