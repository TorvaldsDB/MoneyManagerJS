import axios from "axios";

// 使用环境变量或配置文件来获取API密钥
const API_KEY =
  process.env.IDENTITY_TOOLKIT_API_KEY ||
  "AIzaSyBYR-l69noUJfOxrns4v0KkfT_Q3IBrVs0";

const authenticate = async (endpoint, email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  return response.data.idToken;
};

export const createUser = async (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
