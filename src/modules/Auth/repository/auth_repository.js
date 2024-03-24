const prisma = require("../../db");

const login = async (username, password) => {
  const user = await prisma.users.findFirst({
    where: {
      username: username,
      password: password,
    },
  });
  return user;
};

const register = async (username, password) => {
  const user = await prisma.users.create({
    data: {
      username: username,
      password: password,
    },
  });
  return user;
};

module.exports = { login, register };
