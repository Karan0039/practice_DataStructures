function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr
}


let arr = [4, 2, 6, 7, 8, 9, 1, 3, 5]
let sortedArray = bubbleSort(arr)
console.log(sortedArray)