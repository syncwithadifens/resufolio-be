const apiRepository = require("../repository/user_repository");

const getAllUsers = async () => {
  const users = await apiRepository.findUsers();
  return users;
};

const getSingleUser = async (id) => {
  const user = await apiRepository.findUser(parseInt(id));
  return user;
};

const createUser = async (newUser) => {
  const user = await apiRepository.addUser(newUser);
  return user;
};

const updateUserData = async (id, updatedUser) => {
  const user = await apiRepository.updateUser(parseInt(id), updatedUser);
  return user;
};

const deleteUserData = async (id) => {
  const user = await apiRepository.deleteUser(parseInt(id));
  return user;
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUserData,
  deleteUserData,
};
