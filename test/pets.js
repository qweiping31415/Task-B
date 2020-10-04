const chai =  require('chai');
const chaiHttp =  require('chai-http');
const app = require('../testEnv');
const assert = chai.assert;
const expect = chai.expect;

// configure chai settings
chai.use(chaiHttp);
chai.should();


const {
  routeWithID,
  routeWithoutID,
  SINGLE_ENTITY,
  COLLECTION_ID,
  API_routeWithoutID,
  API_routeWithID
} = require("../constants");


let id;

describe("POST /", () => {
  it("Should create a new Pet", (done) => {
    chai.request(app)
      .post(API_routeWithoutID)
      .set("content-type", "application/x-www-form-urlencoded")
      .send({name:"Testing dog", price: 12, breed: "golden retriever" })
      .end((err, res)=> {
        if (err) {
          done(err);
        } else {
          res.body.should.be.a('object');
          id = res.body.data["_id"];
          done();
        }
      });
  });
});

describe("GET /", () => {
  // test that it is able to connect and get all Pets
  it("Should get all Pets from local database", (done) => {
    chai.request(app)
      .get(API_routeWithoutID)
      .end((err, res) => {
        res.body.should.be.a("object");
        done();
      });
  });
})

describe("GET single pet", () => {
  // test if can grab single pet via id
  it("Should get one pet given ID", (done) => {
    chai.request(app)
      .get(`${API_routeWithoutID}/5`)
      .end((err, res) => {
        res.body.should.be.a("object");
        done();
      });
  })
});






describe("UPDATE /", () => {
  it("Update pet and match its changed attributes as intended", (done) => {

    const CHANGED_NAME = "Changed dog";
    const CHANGED_PRICE = 2.00;
    const CHANGED_BREED = "Poodle";

    const obj = {};
    obj["name"] = CHANGED_NAME;
    obj["price"] = CHANGED_PRICE;
    obj["breed"] = CHANGED_BREED;

    chai.request(app)
      .put(API_routeWithoutID + "/" + id)
      .set("content-type", "application/x-www-form-urlencoded")
      .send(obj)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.body.should.be.a("object")
          // assertions
          assert.equal(CHANGED_NAME, res.body.data["name"]);
          assert.equal(CHANGED_BREED, res.body.data["breed"]);
          done();
        }
      });
  });
});


describe("DELETE /", ()=> {
  it("Delete pet", (done) => {
    chai.request(app)
      .delete(API_routeWithoutID + "/" + id)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.body.should.be.a("object")
          done();
        }
      });
  });
});