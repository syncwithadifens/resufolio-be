const express = require("express");
const userService = require("../services/user_service");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const users = await userService.getAllUsers();
    response.send({ data: users, response_message: "success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "failed" });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const user = await userService.getSingleUser(request.params.id);
    response.send({ data: user, response_message: "success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "failed" });
  }
});

router.post("/", async (request, response) => {
  try {
    const user = await userService.createUser(request.body);
    response.send({ data: user, response_message: "success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "failed" });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const user = await userService.updateUserData(
      request.params.id,
      request.body
    );
    response.send({ data: user, response_message: "success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "failed" });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const user = await userService.deleteUserData(request.params.id);
    response.send({ data: user, response_message: "success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "failed" });
  }
});

module.exports = router;
