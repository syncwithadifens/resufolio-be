const express = require("express");
const { getAllCertificate } = require("../services/certificate_service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const res = await getAllCertificate;
    response.send({
      data: res,
      response_message: "success get all certificate",
    });
  } catch (error) {
    response.send({
      data: error.message,
      response_message: "failed to get all certificate",
    });
  }
});
