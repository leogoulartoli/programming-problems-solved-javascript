// Implement a function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
// and where every number thereafter is equal to the sum of the previous two numbers.

// Iterative solution (more efficient)
const fibIterative = (n) => {
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    let prev = 0, current = 1
    for (let i = 2; i <= n; i++) {
        const next = prev + current
        prev = current
        current = next
    }
    return current
}

// Recursive with Memoization (not so efficient)
const fib = (n) => {
    const memo = []
    const fibRecursive = (n) => {
        if (n <= 1) return n
        if (memo[n] >= 0) return memo[n]
        memo[n] = fibRecursive(n - 1) + fibRecursive(n - 2)
        return memo[n]
    }
    return fibRecursive(n)
}

module.exports = { fibIterative, fib };




