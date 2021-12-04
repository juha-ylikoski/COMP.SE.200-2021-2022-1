import countBy from "../src/countBy"

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
