//taking last index as pivot

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start, end) {
    let pivot = arr[end]
    let swapIndx = start
    for (let i = start; i <= end; i++) {
        if (arr[i] < pivot) {
            swap(arr, swapIndx, i)
            swapIndx++
        }
    }
    swap(arr, end, swapIndx)
    return swapIndx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

let arr = [4, 2, 6, 7, 8, 9, 1, 3, 5]
let sortedArray = quickSort(arr)
console.log(sortedArray)
console.log(arr)