//using naive approach(unoptimized)
function fib_naive(num) {
    if (num <= 2) return 1
    return fib_naive(num - 1) + fib_naive(num - 2)
}
let num = 10
console.log(fib_naive(num))

//using memoization(optimized)
function fib_memo_array(num, memo = []) {
    if (memo[num] != undefined) return memo[num]
    if (num <= 2) return 1
    memo[num] = fib_memo_array(num - 1, memo) + fib_memo_array(num - 2, memo)
    return memo[num]
}
let n = 100
console.log(fib_memo_array(n))

//using tabulation(optimised)
function fib_tabulation(num) {
    let arr = [0, 1, 1]
    for (let i = 3; i <= num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[num]
}
let x = 100
console.log(fib_tabulation(x))