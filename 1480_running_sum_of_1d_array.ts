// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums: number[]): number[] {
  let sums: number[] = [];
  let prevSum: number = 0
  for (let i = 0; i < nums.length; i++) {
    prevSum = prevSum + nums[i]
    sums.push(prevSum) 
  }

    return sums
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))