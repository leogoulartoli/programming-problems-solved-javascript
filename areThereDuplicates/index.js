
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

function areThereDuplicates(...args) {
    const map = {}
    for (let arg of args) {
        map[arg] = (map[arg] || 0) + 1
        if (map[arg] > 1) return true
    }
    return false
}

//Or

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

