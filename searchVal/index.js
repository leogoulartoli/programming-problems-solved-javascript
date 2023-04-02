//Given a sorted array of integers, implement a function called searchVal that accepts a value 
//and returns the index where the value passed to the function is located. If the value is not found, return -1.

//Example
//searchVal([1,2,3,4,5,6], 4) // 3
//searchVal([1,2,3,4,5,6], 6) // 5
//searchVal([1,2,3,4,5,6], 11) // -1
//searchVal([1,2,3,4,5,6], -5) // -1
//searchVal([1,2,3,4,5,6], 1) // 0
//searchVal([1,2,3,4,5,6], 2) // 1
//

function searchVal(arr, val) {
    const arraySize = arr.length - 1;
    if (val < arr[0] || val > arr[arraySize]) return -1;

    const middleIndex = Math.floor(arraySize / 2);
    let index = middleIndex

    while (true) {
        if (val === arr[index]) return index;
        if (index < 0 || index > arraySize) return -1;
        if (val > arr[index]) {
            index++
        } else if (val < arr[index]) {
            index--
        }
    }

}
