//https://visualgo.net/en/sorting

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallest] > arr[j]) smallest = j
        }
        const temp = arr[i]
        arr[i] = arr[smallest]
        arr[smallest] = temp
    }

    return arr
}


console.log(selectionSort([9, 5, 12, 7, 2, 99, 1, 15, 3, 2, 25, 32]))