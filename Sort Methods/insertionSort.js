function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i],
            j
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > currentValue) arr[j + 1] = arr[j]
            else break;
        }
        arr[j + 1] = currentValue
    }
    return arr
}


let arr = [4, 2, 6, 7, 8, 9, 1, 3, 5]
let sortedArray = insertionSort(arr)
console.log(sortedArray)