const express = require("express");
const { getUsers, deleteUser, verifyUser, deleteVerifyUser } = require("../controller/adminPage.controller");

const adminPageRouter = express.Router();

adminPageRouter.get("/users", getUsers)
adminPageRouter.delete("/users/:id", deleteUser)
adminPageRouter.post("/verifuUser/:id", verifyUser)
adminPageRouter.delete("/verifuUser/:id", deleteVerifyUser)


module.exports = adminPageRouter;