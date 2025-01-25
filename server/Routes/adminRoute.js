const express = require("express")
const { registerAdmin, loginAdmin } = require("../Controllers/adminController");

const AdminRouter = express.Router();
AdminRouter.post("/register", registerAdmin)

AdminRouter.post("/login", loginAdmin)


module.exports = AdminRouter