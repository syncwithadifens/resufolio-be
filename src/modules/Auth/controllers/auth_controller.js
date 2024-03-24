const express = require("express");
const router = express.Router();

router.post("/login", async (request, response) => {
  try {
    const res = await loginWithEmail(request.body.email, request.body.password);
    response.send({ data: res, response_message: "login success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "login failed" });
  }
});

router.post("/register", async (request, response) => {
  try {
    const res = await registerWithEmail(
      request.body.username,
      request.body.password
    );
    response.send({ data: res, response_message: "register success" });
  } catch (error) {
    response.send({ data: error.message, response_message: "register failed" });
  }
});

module.exports = router;
