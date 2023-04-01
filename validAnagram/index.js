
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false

function validAnagram(str1, str2) {

    if (str1.length !== str2.length) return false

    const mappedAnagram = {}
    for (let letter of str1) {
        mappedAnagram[letter] = (mappedAnagram[letter] || 0) + 1
    }

    for (let letter of str2) {
        if (!mappedAnagram[letter]) {
            return false
        }
        mappedAnagram[letter] = mappedAnagram[letter] - 1
    }

    return true
}
