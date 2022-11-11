// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
  const roman: string[] = [ 'I', 'V', 'X', 'L', 'C', 'D', 'M' ]
  const romanDigits: number[] = [ 1, 5, 10, 50, 100, 500, 1000 ]

  const sArray: string[] = s.split('')

  let digit: number;
  let sum: number = 0;
  
  for (let i: number = 0; i < sArray.length; i++ ) {
    const char: string = sArray[i];
    const charIndex: number = roman.indexOf(char)
    const charNumber: number = romanDigits[charIndex]
    const nextChar: string = sArray[i + 1];
    const nextCharIndex: number = roman.indexOf(nextChar)
    const nextCharNumber: number = romanDigits[nextCharIndex]

    if (!roman.includes(char)) {
      throw new Error("Wrong letter in roman")
    }

    if ((charIndex + 1) === nextCharIndex || (charIndex + 2) === nextCharIndex) {
      digit = nextCharNumber - charNumber
      i=i+1
    }
    else { 
      digit = charNumber 
    }
    sum = sum + digit
  }

  return sum
};

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
