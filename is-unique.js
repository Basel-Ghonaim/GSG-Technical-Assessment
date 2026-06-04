// Set is a non-recursive data structure.
// When you enter text letters into it, you can immediately check whether the letter exists or not in a fixed time => O(1).

const isUnique = (s) => {
    let charSet = new Set();
    for (let char of s) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true; 
}

console.log(isUnique("hello")); // false
console.log(isUnique("world")); // true
console.log(isUnique("abcde")); // true
console.log(isUnique("abcdea")); // false