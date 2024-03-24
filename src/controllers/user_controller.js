const express = require("express");
const { getUsers, createUser } = require("../services/user_service");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const users = await getUsers();
    response.send({ data: users, response_message: "success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "failed" });
  }
});

router.post("/", async (request, response) => {
  try {
    const user = await createUser(request.body);
    response.send({ data: user, response_message: "success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "failed" });
  }
});

module.exports = router;
