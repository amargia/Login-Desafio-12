const express = require("express");
const router = express.Router();

const products = require("./productRouter");
const productsList = require("./productListRouter");
const home = require("./homeRouter");
const faker = require("./fakerRouter");
const productsFaker = require("./productsFakerRouter");

//middlewares

router.use("/productos", products);
router.use("/lista-productos", productsList);
router.use("/", home);
router.use("/api/productos-test", faker);
router.use("/api/faker-list", productsFaker);

module.exports = router;