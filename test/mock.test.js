// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
var chai = require("chai")
const expect = chai.expect


describe("cases", () => {
 it("Fail", () =>{
     expect(1).to.equal(2)
 });
 it("Success", () =>{
    expect(2).to.equal(2)
});
})
