//https://visualgo.net/en/sorting

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i]
        let positionSwap = i - 1
        for (let j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
            arr[j + 1] = arr[j]
            positionSwap = j
        }
        arr[positionSwap] = currentValue
    }
    return arr
}

console.log(insertionSort([9, 5, 12, 7, 2, 99, 1, 15, 3, 2, 25, 32]))