const router = require("express").Router();
const { addNewProduct, getAllProducts, getSingleProductById, updateProduct } = require("../models/webshopModel");


router.post("/", addNewProduct);

router.get("/:id", getSingleProductById)
router.get("/", getAllProducts);

router.put("/:id", updateProduct)

module.exports = router;
