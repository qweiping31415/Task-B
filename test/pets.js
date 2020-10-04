const chai =  require('chai');
const chaiHttp =  require('chai-http');
const app = require('../testEnv');
const assert = chai.assert;
const expect = chai.expect;

// configure chai settings
chai.use(chaiHttp);
chai.should();


const {
  petsCollection,
  routeWithID,
  routeWithoutID,
  SINGLE_ENTITY,
  COLLECTION_ID,
  API_routeWithoutID,
  API_routeWithID
} = require("../constants");


var id;

describe("GET /", () => {
  // test that it is able to connect and grab all Pets
  it("Should get all Pets from mongoDB atlas", (done) => {
    chai.request(app)
      .get(API_routeWithoutID)
      .end((err, res) => {
        res.body.should.be.a("object");
        //assert.equal("success", res.body.status);
        done();
      });
  });
})

describe("GET single pet", () => {
  // test if can grab single pet via id
  // for this test to work, please don't delete ID of 3 from the list
  it("Should get one pet given ID", (done) => {
    chai.request(app)
      .get(`${API_routeWithoutID}/3`)
      .end((err, res) => {
        res.body.should.be.a("object");
        done();
      });
  })
});
