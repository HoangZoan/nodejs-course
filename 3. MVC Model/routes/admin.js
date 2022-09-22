const express = require("express");

const adminControllers = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminControllers.getAddProduct);

router.post("/product", adminControllers.postAddProduct);

router.get("/products", adminControllers.getProducts);

module.exports = router;
