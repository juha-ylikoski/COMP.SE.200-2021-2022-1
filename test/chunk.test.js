import chunk from "../src/chunk"

describe("Tests for chunk",()=>{
    let arrchunk = ['a','b','c','d']
    test("Test size = length of array",()=>{
        expect(chunk(arrchunk,4)).toEqual([['a','b','c','d']])
    })
    test("Test size 0",()=>{
        expect(chunk(arrchunk,0)).toEqual([])
    })
    test("Test chunks with size 1",()=>{
        expect(chunk(arrchunk,1)).toEqual([['a'],['b'],['c'],['d']])
    })
})
