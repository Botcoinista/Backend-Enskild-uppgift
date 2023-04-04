const product = require("../schemas/webshopSchema");

exports.addNewProduct = (req, res) => {
  const { Name, Description, Price, ImgURL } = req.body;

  if (!Name || !Description || !Price || !ImgURL) {
    res.status(400).json({
      message: "Alla fälten måste vara ifylda",
    });
    return;
  }

  product
    .create({ Name, Description, Price, ImgURL })
    .then((product) => res.status(201).json(product))
    .catch(() =>
      res
        .status(500)
        .json({ message: "Something whent wrong creating the product" })
    );
};

exports.getAllProducts = (req, res) => {
  product.find().then((products) => {
    res.status(200).json(products);
  });
};

// getproductById
