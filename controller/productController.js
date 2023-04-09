const router = require("express").Router();
const { addNewProduct, getAllProducts, getSingleProductById, updateProduct, deleteProduct } = require("../models/webshopModel");


router.post("/", addNewProduct);

router.get("/:id", getSingleProductById)
router.get("/", getAllProducts);

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)



module.exports = router;
