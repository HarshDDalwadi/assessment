const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "http://localhost:3000/api/products"
chai.use(chaiHttp);

describe("API Unit Test", function () {
	const id = "645e5357fdf35331f556d1a3";
	it('gets all the products', function (done) {
		chai.request(baseUrl).get('/')
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("array");
				done();
			})
	});
	it('gets a single product', function (done) {
		chai.request(baseUrl).get(`/${id}`)
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("object");
				expect(res.body).to.have.property("_id");
				done();
			})
	});
	it('updates the product price', function (done) {
		const updatedPrice = 89;
		chai.request(baseUrl)
			.patch(`/${id}/update`)
			.send({ price: updatedPrice })
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an('object');
				expect(res.body.price).to.equal(updatedPrice);
				done();
			})
	})
})

