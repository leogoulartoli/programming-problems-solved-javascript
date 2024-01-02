const merge = (arr1, arr2) => {
    const results = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    return results
}


const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let midPoint = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, midPoint))
    let right = mergeSort(arr.slice(midPoint))
    return merge(left, right)
}

console.log(mergeSort([1, 3, 88, 2]))
