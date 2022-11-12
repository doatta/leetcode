// https://leetcode.com/problems/richest-customer-wealth/

function maximumWealth(accounts: number[][]): number {
    let wealth: number = 0;
    let sum: number = 0;
    accounts.forEach( (account) => {
        account.forEach( (number) => {
            sum += number
        })
        if (wealth < sum) {
            wealth = sum
        }
        sum = 0
    })

    return wealth
};


console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))