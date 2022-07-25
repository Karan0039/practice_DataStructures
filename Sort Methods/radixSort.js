function getDigit(num, place) {
    return parseInt(Math.abs(num) / (10 ** place)) % 10
}

function countDigits(num) {
    if (num == 0) return 1
    let digits = parseInt(Math.log10(Math.abs(num))) + 1
    return digits
}

function mostDigits(arr) {
    let max = 0
    for (let i of arr)
        max = Math.max(max, countDigits(i))
    return max
}

function radixSort(arr) {
    let max = mostDigits(arr)
    for (let i = 0; i < max; i++) {
        let bucket = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            bucket[getDigit(arr[j], i)].push(arr[j])
        }
        arr = [].concat(...bucket)
    }
    return arr
}
let arr = [1, 2443, 545, 43, 32, 2, 12, 45, 765, 234, 1234, 2345, 7654, 3214, 43215, 473821]
let sortedArray = radixSort(arr)
console.log(sortedArray)
console.log(arr)