const haveSameDigits = (x, y) => {
  let s1 = x.toString()
  let s2 = y.toString()

  // If the lengths of the strings are different, they cannot have the same digits
  if(s1.length !== s2.length) return false;

  // Create a count array to count the occurrences of each digit (0-9)
  let count = new Array(10).fill(0);

  for(let i = 0; i < s1.length; i++) {
    count[parseInt(s1[i])]++;
    count[parseInt(s2[i])]--;
  }

  for(let i = 0; i < 10; i++) {
    if(count[i] !== 0) return false;
  }

  return true;
};

console.log(haveSameDigits(123, 321)); // true
console.log(haveSameDigits(123, 456)); // false
console.log(haveSameDigits(4927, 2749)); // true
console.log(haveSameDigits(123, 3210)); // false
