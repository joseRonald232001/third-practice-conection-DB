const productsControllers = require("./products.controllers");
const getAllProducts = (req, res) => {
    productsControllers
        .findAllProducts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(404).json({ message: `not found data ${error}` });
        });
};
const getProductById = (req, res) => {
    const id = req.params.id;
    productsControllers
        .findProductById(id)
        .then((data) => {
            if (!data) {
                res.status(404).json({
                    message: `product with id ${id},not found`,
                });
            }
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(400).json({ message: error });
        });
};
const createProducts = (req, res) => {
    const productObj = req.body;
    productsControllers
        .createProduct(productObj)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ message: "request bad",error });
        });
};
const updateProducts = (req, res) => {
    const id = req.params.id;
    const productObj = req.body;
    productsControllers
        .updateProduct(id, productObj)
        .then((data) => {
            if (!data) {
                res.status(404).json({ message: `product with ${id} invalid` });
            }
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(400).json({ message: "bad request",error });
        });
};
const deleteProducts = (req, res) => {
    const id = req.params.id;
    productsControllers
        .deleteProduct(id)
        .then((data) => {
            if (!data) {
                res.status(404).json({ message: `product with ${id} invalid` });
            }
            res.status(204).json();
        })
        .catch((error) => {
            res.status(400).json({ message: "bad request ", error });
        });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProducts,
    updateProducts,
    deleteProducts,
};
