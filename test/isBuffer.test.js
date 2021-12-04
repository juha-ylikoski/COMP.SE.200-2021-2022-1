import isBuffer from "../src/isBuffer"
import { Buffer } from 'buffer'


describe("Tests for isBuffer",()=>{
    test("Test real buffer", ()=>{
        const buf2 = new Buffer.alloc(10)
        expect(isBuffer(buf2)).toEqual(true)
    })
    test("Test fake buffer", ()=>{
        expect(isBuffer("NOT A BUFFER")).toEqual(false)
    })
})
