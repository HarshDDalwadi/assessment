# assessment

## Clone the backend 
```
git clone git@github.com:HarshDDalwadi/assessment.git .
```

## Environment variables
Create a .env file in the root directory with the following environment variables
1) MONGO = your mongodb connection string
2) PORT = the port for server to listen

## Start the backend
```
npm i
nodemon server.js
```
## APIs
baseUrl: http://localhost:3000/api/products
1) GET all the products : baseUrl
2) GET a product with id : baseUrl/id
3) PUT : change the price of a product with id = id : baseUrl/id/update 
    (the body should contain price attribute with the updated price)
    
## TESTs
There are three tests :
1) To GET all the products details
2) To GET details of a product with given id
3) To PUT an update of price of the given product

```
mocha test.js --timeout 100000
```

