//input is string
//output is string
export function pigLatin(inputString: string): string {
  if (inputString.length === 0) {
    return "";
  }

  let outPutString = inputString.split(" ");

  let result = inputString
    .split(" ")
    .map((x) => {
      if (x.substring(1).match(/[aA-zZ]/)) {
        x = `${x.substring(1)}${x.charAt(0)}ay`;
      }
      return x;
    })
    .join(" ");

  return result;
}
