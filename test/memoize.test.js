
import memoize from "../src/memoize"

describe("Tests for memoize",()=>{
    test("Positive case", () => {
        const object = { 'a': 1, 'b': 2 }
        const f = memoize((arg)=>{
            if (arg === 'a') {
                return 1
            } else if (arg == 'b') {
                return 2
            }
        });
        expect(f('a')).toEqual(1)
        expect(f('b')).toEqual(2)
    })
    test("With resolver", () => {
        const object = { 'a': 1, 'b': 2 }
        const f = memoize((arg)=>{
            if (arg === 'a') {
                return 1
            } else if (arg == 'b') {
                return 2
            }
        }, (arg)=>{
            arg
        });
        expect(f('a')).toEqual(1)
        expect(f('b')).toEqual(2)
    })
    test("With bad args", () => {
        expect(()=>memoize(1)).toThrow(TypeError)
        expect(()=>memoize(1, 2)).toThrow(TypeError)
    })
})

