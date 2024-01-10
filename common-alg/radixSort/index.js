const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
    //return String(Math.abs(Math.floor(num))).length
    // or
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
    let maxDigits = 0
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}

const radixSort = (arr) => {
    let maxDigitCount = mostDigits(arr)
    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            digitBuckets[getDigit(arr[j], i)].push(arr[j])
        }
        arr = [].concat(...digitBuckets)
    }
    return arr
}

console.log(radixSort([6, 122, 13, 99959, 24]))