function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [4, 2, 6, 7, 8, 9, 1, 3, 5]
let sortedArray = quickSort(arr)
console.log(sortedArray)
console.log(arr)