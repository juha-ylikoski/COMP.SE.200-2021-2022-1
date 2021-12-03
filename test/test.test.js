import toNumber from "../src/toNumber"
import memoize from "../src/memoize"
import isBuffer from "../src/isBuffer"
import { Buffer } from 'buffer'
import difference from "../src/difference"
import chunk from "../src/chunk"
import countBy from "../src/countBy"
import filter from "../src/filter"
import exp from "constants"
import { isArrayBuffer, isTypedArray } from "util/types"
import isArrayLike from "../src/isArrayLike"
import isLength from "../src/isLength"

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
describe("Tests for countBy",()=>{
    test("Test with valid data",()=>{
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 })
    })
    test("Test with invalid data",()=>{
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        expect(countBy(users, value => value.ok)).toEqual({})
    })
    test("Test with empty data",()=>{
        const users = []
        expect(countBy(users, value => value.bop)).toEqual({})
    })
    test("Test with empty object",()=>{
        const users = {}
        expect(countBy(users, value => value.cbt)).toEqual({})
    })
})
describe("Tests for filter",()=>{
    test("Test with valid data",()=>{     
        const users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({ active }) => active) ).toEqual([{ 'user': 'barney', 'active': true }])
    })
    test("Test with invalid data",()=>{
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({active}) => active.bop)).toEqual([[]])
    })
    test("Test with empty data", ()=>{
        const users = []
        expect(filter(users, ({ active }) => active) ).toEqual([[]])
    })
    test("Test with null data", ()=>{
        expect(filter(null, ({ active }) => active) ).toEqual([[]])
    })
})
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