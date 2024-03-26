const { findCertificates } = require("../repository/certificate_repository");

const getAllCertificate = async () => {
  const data = await findCertificates;
  return data;
};

module.exports = { getAllCertificate };
