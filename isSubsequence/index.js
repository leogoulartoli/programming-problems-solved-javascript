// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters in the first string
// appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)


function isSubsequence(str1, str2) {
    if (!str1.length) return true
    if (!str2.length) return false

    let index = 0
    let savedLetter = str1[0];
    for (let i = 0; i < str2.length; i++) {
        if (savedLetter === str2[i]) {
            index++
            savedLetter = str1[index]
        }
    }
    return index === str1.length
}