import difference from "../src/difference"

describe("Tests for difference", ()=>{
    let arr1 = [2,1]
    let arr2 = [2,3]
    test("Test with difference",()=>{
        expect(difference(arr1,arr2)).toEqual([1])
    })
    test("Test without difference",()=>{
        expect(difference(arr1,arr1)).toEqual([])
    })
    test("Test with one invalid",()=>{
        expect(difference(arr1,"A")).toEqual([2,1])
    })
    test("Test with two invalid",()=>{
        expect(difference("B","A")).toEqual([])
    })
})