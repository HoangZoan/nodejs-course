const express = require("express");
const path = require("path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/shop",
    hasProduct: products.length > 0,
    activeShop: true,

    // layout: true - By default, handlebars will get this
  });
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
