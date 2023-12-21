//https://visualgo.net/en/sorting

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let noSwap = true
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // const temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
                //OR
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        if (noSwap) break
    }
    return arr
}

console.log(bubbleSort([9, 5, 12, 7, 2, 99, 1, 15, 3, 2, 25, 32]))