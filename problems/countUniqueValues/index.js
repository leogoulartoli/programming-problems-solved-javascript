// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4


function countUniqueValues(arr) {
    if (!arr.length) return 0
    const set = new Set(arr)
    return Array.from(set).length
}

//Or

function countUniqueValues(arr) {
    if (!arr.length) return 0
    let sameNumber = arr[0]
    let counter = 1
    for (let i = 1; i < arr.length; i++) {
        if (sameNumber !== arr[i]) {
            sameNumber = arr[i]
            counter++
        }
    }
    return counter
}