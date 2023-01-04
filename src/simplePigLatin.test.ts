import { pigLatin } from "../src/simplePigLatin";
describe("test simple pig atin", () => {
  it("should return empty string ", () => {
    expect(pigLatin("")).toEqual("");
  });

  it("should return string 'igPay atinlay siay oolcay'", () => {
    expect(pigLatin('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
  });

  it("should leave punctuation marks untouched", () => {
    expect(pigLatin('Hello world !')).toEqual('elloHay orldway !');
  });

});