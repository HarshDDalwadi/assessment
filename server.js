//IMPORTING THE REQUIRED PACKAGES
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRouter = require('./routes/products');
const bodyParser = require('body-parser');

const app = express();

//DB CONNECTION
const connect = () => {
	mongoose.connect(process.env.MONGO).then((db) => {
		console.log("Connected to db");
	}).catch((err) => {
		throw err;
	})
}

//ENVIRONMENT SETUP
dotenv.config();


//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/products', productRouter);


app.listen(process.env.PORT || 3000, () => {
	connect();
	console.log(`Server is running on port ${process.env.PORT}`)
})

