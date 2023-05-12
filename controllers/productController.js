const mongoose = require('mongoose');
const Product = require('../models/Product');
const createError = require('../utils/error');
const { v4: uuidv4 } = require('uuid');

const addProduct = async (req, res, next) => {
	try {
		const product = new Product({ ...req.body, id: uuidv4() });
		product.save();
		res.status(200).json(product);
	}
	catch (err) {
		next(err);
	}
}

const getAllProducts = async (req, res, next) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	}
	catch (err) {
		next(err);
	}
}

const getProduct = async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product)
			return next(createError(404, "Product not found"));
		res.status(200).json(product);
	}
	catch (err) {
		next(err);
	}
}

const updateProduct = async (req, res, next) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, { price: req.body.price }, { new: true });
		if (!product)
			return next(createError(404, "Product not found"));
		res.status(200).json(product);
	} catch (err) {
		next(err);
	}
}
module.exports = { addProduct, getProduct, getAllProducts, updateProduct };