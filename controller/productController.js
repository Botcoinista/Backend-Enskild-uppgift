const router = require("express").Router();
const { addNewProduct, getAllProducts, getSingleProductById } = require("../models/webshopModel");
// const webshopModel = require("../models/webshopModel")
// const webshopSchema = require("../schemas/webshopSchema")

// router.post("/", webshopModel.addNewProduct)

router.post("/", addNewProduct);

router.get("/:id", getSingleProductById)
router.get("/", getAllProducts);

module.exports = router;
