const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name of the product is required"]
	},
	description: {
		type: String,
		required: [true, "Description of the product is required"]
	},
	price: {
		type: Number,
		required: [true, "Price of the product is required"]
	},
	id: {
		type: String,
		required: [true, "Id of the product is required"]
	}
});

module.exports = mongoose.model("Product", ProductSchema);

