import toNumber from "../src/toNumber"
import memoize from "../src/memoize"
import isBuffer from "../src/isBuffer"
import { Buffer } from 'buffer'
import difference from "../src/difference"
import chunk from "../src/chunk"

function testfunc(a){
    return a
}

describe("Tests for toNumber",()=>{
    test("Test number 1",()=>{
        expect(toNumber(1)).toEqual(1)
    })
    test("Test letters",()=>{
        expect(toNumber('ABBA')).toEqual(NaN)
    })
    test("Test Symbol with number",()=>{
        expect(toNumber(Symbol(1))).toEqual(NaN)
    })
    test("Test Symbol with letters",()=>{
        expect(toNumber(Symbol("UNICORN"))).toEqual(NaN)
    })
    test("Test number object",()=>{
        const number2 = new Number(1)
        expect(toNumber(number2)).toEqual(1)
    })
    test("Test object String with letters",()=>{
        const string2 = new String("Unicorn")
        expect(toNumber(string2)).toEqual(NaN)
    })
    test("Test boolean",()=>{
        expect(toNumber(true)).toEqual(1)
    })
    test("Test list",()=>{
        expect(toNumber({Int: 1})).toEqual(NaN)
    })
    test("Test Null",()=>{
        expect(toNumber(null)).toEqual(0)
    })
})
describe("Tests for memoize",()=>{
    
})
describe("Tests for isBuffer",()=>{
    test("Test real buffer", ()=>{
        const buf2 = new Buffer.alloc(10)
        expect(isBuffer(buf2)).toEqual(true)
    })
    test("Test fake buffer", ()=>{
        expect(isBuffer("NOT A BUFFER")).toEqual(false)
    })
})
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