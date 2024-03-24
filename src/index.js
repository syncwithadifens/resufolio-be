const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("Hello World");
});

const userController = require("./controllers/user_controller");
app.use("/users", userController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
