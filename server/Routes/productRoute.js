const express = require("express");
const ProductRouter = express.Router();
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addVariant,
    removeVariant,
} = require("../Controllers/productController");
const isAdminAuthorized = require("../Middleware/authAdmin");

// Product routes
ProductRouter.post("/create", isAdminAuthorized, createProduct);
ProductRouter.get("/getAll", getAllProducts);
ProductRouter.get("/specificProduct/:id", getProductById);
ProductRouter.put("/updateProduct/:id", updateProduct);
ProductRouter.delete("/deleteProduct/:id", deleteProduct);

// Variant routes
ProductRouter.post("/addVariant/:id", addVariant);
ProductRouter.delete("/removeVariant/:id/:variantId", removeVariant);

module.exports = ProductRouter;
