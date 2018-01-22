// const chai = require("chai");
// const chaiHttp = require("chai-http");

// const { app, runServer, closeServer } = require("../server");

// const should = chai.should();
// chai.use(chaiHttp);

// describe("Word set", function() {
//   before(function() {
//     return runServer();
//   });

//   after(function() {
//     return closeServer();
//   });
  
//   it("should get 200 on GET requests", function() {
//     return chai.request(app)
//       .get("/api/wordset/foo")
//       .then(function(res) {
//         res.should.have.status(200);
//         res.should.be.json;
//       });
//   });

//   it("should get 200 on PUT requests", function () {
//     return chai.request(app)
//       .put("/api/wordset/foo")
//       .then(function (res) {
//         res.should.have.status(200);
//         res.should.be.json;
//       });
//   });
  
//   it("should get 200 on POST requests", function () {
//     return chai.request(app)
//       .post("/api/wordset/")
//       .then(function (res) {
//         res.should.have.status(200);
//         res.should.be.json;
//       });
//   });

//   it("should get 200 on DELETE requests", function () {
//     return chai.request(app)
//       .delete("/api/wordset/foo")
//       .then(function (res) {
//         res.should.have.status(200);
//         res.should.be.json;
//       });
//   });
// });