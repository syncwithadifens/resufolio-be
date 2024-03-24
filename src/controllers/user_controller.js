const express = require("express");
const { getUsers } = require("../services/user_service");
const router = express.Router();

router.get("/tes", async (request, response) => {
  try {
    const users = await getUsers();
    response.send({ data: users, response_message: "success" });
  } catch (error) {
    response.send(`error: ${error.message}`);
  }
});

module.exports = router;
