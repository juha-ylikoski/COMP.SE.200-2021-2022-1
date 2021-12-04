import filter from "../src/filter"

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
