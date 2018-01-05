// const chai = require("chai");
// const chaiHttp = require("chai-http");

// const { app, runServer, closeServer } = require("../server");

// const should = chai.should();
// chai.use(chaiHttp);

// describe("Game", function() {
//   before(function() {
//     return runServer();
//   });

//   after(function() {
//     return closeServer();
//   });
  
//   it("should get 200 on GET requests", function() {
//     return chai.request(app)
//       .get("/api/game/")
//       .then(function(res) {
//         res.should.have.status(200);
//         res.should.be.json;
//       });
//   });

//   it("should get 200 on GET requests", function() {
//     return chai.request(app)
//       .get("/api/game/foo")
//       .then(function(res) {
//         res.should.have.status(200);
//         res.should.be.json;
//       });
//   });
// });