// https://leetcode.com/problems/roman-to-integer/

function romanToIntMap(s: string): number {
  const roman = new Map<string, number>([
     [ 'I', 1 ],
     [ 'V', 5 ],
     [ 'X', 10 ],
     [ 'L', 50 ],
     [ 'C', 100 ],
     [ 'D', 500 ],
     [ 'M', 1000 ]
  ])

  const sArray: string[] = s.split('')

  let sum: number = 0;
  let charNumber: number;
  let nextCharNumber: number;
  let char: string;

  for (let i: number = sArray.length - 1; i >= 0; i-- ) {
    char = sArray[i];

    if (roman.has(char)) {
      charNumber = roman.get(char)!
    }
    else { throw new Error("Wrong letter in roman: " + char) }

    if (i != 0) {
      char = sArray[i - 1];
      if (roman.has(char)) {
        nextCharNumber = roman.get(char)!
      }
      else { throw new Error("Wrong letter in roman: " + char) }

      if (nextCharNumber < charNumber) {  
        charNumber = charNumber - nextCharNumber  
        i=i-1  
      }
    }

    sum = sum + charNumber
  }

  return sum
};

console.log(romanToIntMap('III'))
console.log(romanToIntMap('LVIII'))
console.log(romanToIntMap('MCMXCIV'))
