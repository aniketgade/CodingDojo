const ProductsController = require("../controller/products.controller");

module.exports = app => {
    app.get("/api/products/", ProductsController.getAllProducts);
    app.get("/api/products/:id", ProductsController.getOneProduct);
    app.post("/api/products/new", ProductsController.createProduct);
    app.put("/api/products/update/:id", ProductsController.updateProduct);
    app.delete("/api/products/delete/:id", ProductsController.deleteProduct);
};