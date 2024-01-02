const pivot = (arr, start = 0, end = arr.length + 1) => {

    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    let pivot = arr[start]
    let swapIdx = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}



const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)

    }
    return arr
}
console.log(quickSort([5, 6, 3, 2, 8, 1, 4]))