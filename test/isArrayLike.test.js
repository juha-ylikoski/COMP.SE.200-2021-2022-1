import isArrayLike from "../src/isArrayLike"

describe("Tests for isArrayLike",()=>{
    test("Test with true valid data",()=>{
        expect(isArrayLike([1,2,3])).toEqual(true)
    })
    test("Test with false valid data",()=>{
        expect(isArrayLike(bop=>bop)).toEqual(false)
    })
    test("Test with null data",()=>{
        expect(isArrayLike(null)).toEqual(false)
    })
    test("Test with empty data",()=>{
        expect(isArrayLike('')).toEqual(true)
    })
})
