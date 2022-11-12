// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

function numberOfSteps(num: number): number {
    let count: number = 0;
    for (num; num > 0;) {
      num % 2 === 0 ? num = num/2 : num--
      count++
    }
    return count
};

console.log(numberOfSteps(14))
console.log(numberOfSteps(8))
console.log(numberOfSteps(123))