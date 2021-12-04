import isLength from "../src/isLength"


describe("Tests for isLength",()=>{
    test("Test with true valid data",()=>{
        expect(isLength(3)).toEqual(true)
    })
    test("Test with false valid data",()=>{
        expect(isLength('3')).toEqual(false)
    })
    test("Test with invalid data",()=>{
        expect(isLength(9007199254740992)).toEqual(false)
    })
    test("Test with null data",()=>{
        expect(isLength(null)).toEqual(false)
    })
})