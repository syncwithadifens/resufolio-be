const prisma = require("../../../db");

const findCertificates = async () => {
  const data = await prisma.certificates.findMany;
  return data;
};

module.exports = {
  findCertificates,
};
