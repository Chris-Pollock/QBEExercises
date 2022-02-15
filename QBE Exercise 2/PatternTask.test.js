const { test, expect } = require('@jest/globals');
const PatternTask = require('./PatternTask');

describe("Tests against the demo pattern", () => {
    test('Demo pattern', () => {
      var demoPattern =  { And: ["AddressVerified", "DocumentGenerated", { Or: ["EmailSent", "SMSSent"]} ] }

      expect(PatternTask([ "AddressVerified", "DocumentGenerated", "EmailSent"],                  demoPattern)).toBe(true)
      expect(PatternTask([ "AddressVerified", "DocumentGenerated", "SMSSent"],                    demoPattern)).toBe(true)
      expect(PatternTask([ "DocumentGenerated", "AddressVerified", "SMSSent"],                    demoPattern)).toBe(true)
      expect(PatternTask([ "DocumentGenerated", "SMSSent", "AddressVerified" ],                   demoPattern)).toBe(true)
      expect(PatternTask([ "AddressVerified", "EmailGenerated", "DocumentGenerated", "EmailSent"],demoPattern)).toBe(true)
      expect(PatternTask([ "EmailGenerated", "AddressVerified", "EmailSent" ],                    demoPattern)).toBe(false)
      expect(PatternTask([ "DocumentGenerated", "AddressVerified" ],                              demoPattern)).toBe(false)
      expect(PatternTask([ "DocumentGenerated", "SMSSent" ],                                      demoPattern)).toBe(false)
    });
    test("Extra testing to try a deeper pattern", () => {
        var deeperPattern = { And: ["a" , {And: ["b","c"]}, {Or: ["z", {Or: ["z", {And: ["d", "e"]}]}]}]}
        expect(PatternTask(["a","b","c","d","e","f"] , deeperPattern)).toBe(true);
        expect(PatternTask(["a","b","c","d"] ,         deeperPattern)).toBe(false);
    });
   })

