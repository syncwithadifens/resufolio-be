const prisma = require("../db");

const findUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};

const findUser = async (id) => {
  const user = await prisma.users.findFirst({
    where: {
      id: id,
    },
  });
  return user;
};

const addUser = async (newUser) => {
  const user = await prisma.users.create({
    data: {
      name: newUser.name,
      birthday: newUser.birthday,
      city: newUser.city,
      phone: newUser.phone,
      avatar: newUser.avatar,
    },
  });
  return user;
};

const updateUser = async (id, updatedUser) => {
  const user = await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      name: updatedUser.name,
      birthday: updatedUser.birthday,
      city: updatedUser.city,
      phone: updatedUser.phone,
      avatar: updatedUser.avatar,
    },
  });
  return user;
};

const deleteUser = async (id) => {
  const user = await prisma.users.delete({
    where: {
      id: id,
    },
  });
  return user;
};

module.exports = { findUsers, addUser, findUser, updateUser, deleteUser };
