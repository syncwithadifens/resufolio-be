const prisma = require("../db");

const findUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
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

module.exports = { findUsers, addUser };
