const product = require("../schemas/webshopSchema");

exports.addNewProduct = (req, res) => {
  const { Name, Description, Price, ImgURL } = req.body;

  if (!Name || !Description || !Price || !ImgURL) {
    res.status(400).json({
      message: "You must fill all fields",
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


//Get all products
exports.getAllProducts = (req, res) => {
  product.find().then((products) => {
    res.status(200).json(products);
  })
  .catch(error => {
    res.status(500).json({ message: " Error retrieving product data" })
  })
};




// getproductById (a single product)
exports.getSingleProductById = (req, res) => {
  product.findById(req.params.id)
    .then(product => {
      res.status(200).json(product)
    })
    .catch(error => {
      res.status(500).json({ message: "Error retrieving product data" })
    })
}


//Update product
exports.updateProduct = (req, res) => {
  
  const { Name, Description, Price, ImgURL } = req.body;
  if(!Name || !Description || !Price || !ImgURL) {
    res.status(400).json({
      message: "You need to enter new values"
    })
    return
  }

  product.findByIdAndUpdate(req.params.id, { Name, Description, Price, ImgURL }, { new: true }) 
  .then(product => {
    if(!product) {
      res.status(400).json({
        message: "Could not find that product"
      })
      return
    } 
    res.status(400).json(product)
  })
  .catch(error => {
    res.status(500).json({ 
      message: "Error when updaing the product" })
  })
}
