
//Implement a function which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

//Examples:
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //17
// maxSubarraySum([4, 2, 1, 6], 1) //6
// maxSubarraySum([4, 2, 1, 6, 2], 4) //13
// maxSubarraySum([], 4) //null

function maxSubarraySum(array, nMax) {
    if (!array.length || array.length < nMax) return null
    let maxSum = 0
    for (let i = 0; i < nMax; i++) {
        maxSum += array[i]
    }
    let tempSum = maxSum
    for (let i = nMax; i < array.length; i++) {
        tempSum = tempSum - array[i - nMax] + array[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

