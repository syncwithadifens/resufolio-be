const { login, register } = require("../repository/auth_repository");

const loginWithEmail = async (email, password) => {
  const userCredential = login(email, password);
  return userCredential;
};

const registerWithEmail = async (username, password) => {
  const userCredential = register(username, password);
  return userCredential;
};

module.exports = { loginWithEmail, registerWithEmail };
