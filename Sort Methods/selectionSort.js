function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (i != min)
            [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

let arr = [4, 2, 6, 7, 8, 9, 1, 3, 5]
let sortedArray = selectionSort(arr)
console.log(sortedArray)
console.log(arr)