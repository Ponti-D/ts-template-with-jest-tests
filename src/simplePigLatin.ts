//input is string
//output is string
export function pigLatin(inputString: string): string {
  if (inputString.length === 0) {
    return "";
  }

  let outPutString = inputString.split(" ");

  let result = outPutString.map((word) => {
    if (word.substring(1).match(/[aA-zZ]/)) {
      word = word.substring(1) + word.charAt(0) + "ay";
    }
    return word;
  });
 
  return result.join(" ");
}
