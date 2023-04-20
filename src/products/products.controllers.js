const Products = require("../models/products.models");
const findAllProducts = async () => {
    const allProducts = await Products.findAll();
    return allProducts;
};

const findProductById = async (id) => {
    const product = await Products.findOne({
        where: {id:id,},
    });
    return product;
};

const createProduct = async (productObj) => {
    const newProduct = await Products.create({
        name: productObj.name,
        description: productObj.description,
        price: productObj.price,
        stock: productObj.stock,
    });
    return newProduct;
};

const updateProduct = async (id, productObj) => {
    const selectedProduct = Products.findOne({
        where: {id: id,},
    });
    const product = await selectedProduct.update(productObj);
    return product;
};

const deleteProduct = async (id) => {
    const deletedProduct = Products.destroy({
        where: {id:id},
    });
    return deletedProduct;
};

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
