const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Products = db.define("products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
});

module.exports = Products;
