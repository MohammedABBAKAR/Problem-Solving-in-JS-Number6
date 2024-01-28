// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]




function caseInsensitiveSort(arr) {
    return arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

// Example usage:
const example1 = ["Hello", "there", "I'm", "fine"];
const example2 = ["C", "d", "a", "B"];

console.log(caseInsensitiveSort(example1)); // Outputs ["fine", "Hello", "I'm", "there"]
console.log(caseInsensitiveSort(example2)); // Outputs ["a", "B", "C", "d"]



// In this implementation, the localeCompare 
// method is used with the sensitivity: 'base'
//  option, which makes the comparison case-insensitive. The sort method then uses this 
// custom comparison function to sort the array alphabetically, case-insensitive.










function caseInsensitiveSort(arr) {
    return arr.map(str => str.toLowerCase()).sort((a, b) => a.localeCompare(b));
}

// Example usage:
const example3 = ["Hello", "there", "I'm", "fine"];
const example4 = ["C", "d", "a", "B"];

console.log(caseInsensitiveSort(example3)); // Outputs ["fine", "Hello", "I'm", "there"]
console.log(caseInsensitiveSort(example4)); // Outputs ["a", "B", "C", "d"]


// In this version, the map function is used 
// to create a new array where each string is
//  converted to lowercase. The sort method is then applied to the lowercase strings,
//  resulting in a case-insensitive sorting of the original array.