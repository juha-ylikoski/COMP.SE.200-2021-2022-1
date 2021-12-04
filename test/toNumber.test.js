import toNumber from "../src/toNumber"

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