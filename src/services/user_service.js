const { findUsers, addUser } = require("../repository/user_repository");

const getUsers = async () => {
  const users = await findUsers();
  return users;
};

const createUser = async (newUser) => {
  const user = await addUser(newUser);
  return user;
};

module.exports = { getUsers, createUser };
