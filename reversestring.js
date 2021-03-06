// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
  }

// SOLUTION 1

// function reverse(str) {
    
    
    // let splitString = str.split("")
    // let reverseArray = splitString.reverse()
    // let joinArray = reverseArray.join("")

    // return joinArray

    // OR

    // return str
    //     .split("")
    //     .reverse()
    //     .join("")

// }

// SOLUTION 2

// function reverse(str) {
//     let reversed = ''

//     for (let character of str) {
//         reversed = character + reversed 
//     }    

//     return reversed
// }