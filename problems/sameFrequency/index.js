// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(n1, n2) {
    const n1Array = n1.toString()
    const n2Array = n2.toString()
    if (n1Array.length !== n2Array.length) return false
    const map = {}
    for (let number of n1Array) {
        map[number] = (map[number] || 0) + 1
    }

    for (let number of n2Array) {
        if (!map[number]) return false
        map[number] = map[number] - 1
    }

    return true
}