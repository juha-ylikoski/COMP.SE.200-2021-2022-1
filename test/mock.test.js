// node 12 and up
import add from "../src/add"

describe("cases", () => {
 it("Fail", () =>{
     expect(1).toEqual(2)
 });
 it("Success", () =>{
    expect(2).toEqual(2)
});
it("Success", () =>{
    expect(add(2,1)).toEqual(2)
});

})
