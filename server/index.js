const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db"); // Updated the function name to match your export
const cookieParser = require("cookie-parser");
const AdminRouter = require("./Routes/adminRoute");
const ProductRouter = require("./Routes/productRoute");



dotenv.config();

const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined
const app = express();

connectDB();
app.use(cookieParser());

app.use(express.json());

app.use("/Mejuri/Admin", AdminRouter)
app.use("/Mejuri/Product", ProductRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
