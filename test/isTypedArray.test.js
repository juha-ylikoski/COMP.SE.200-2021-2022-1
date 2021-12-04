import isTypedArray from "../src/isTypedArray"

describe("Tests for isTypedArray",()=>{
    test("Test with valid data",()=>{
        const test = new Uint8Array
        expect(isTypedArray(test)).toEqual(true)
    })
    test("Test with false valid data",()=>{
        expect(isTypedArray([])).toEqual(false)
    })
    test("Test with invalid data",()=>{
        expect(isTypedArray('A')).toEqual(false)
    })
    test("Test with empty data",()=>{
        expect(isTypedArray('')).toEqual(false)
    })
    test("Test with null data", ()=>{
        expect(isTypedArray(null)).toEqual(false)
    })
})
