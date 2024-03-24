const { findUsers } = require("../repository/user_repository");

const getUsers = async () => {
  const users = await findUsers();
  return users;
};

module.exports = { getUsers };
