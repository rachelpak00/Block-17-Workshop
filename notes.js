/* Block 17: Methods and Debugging 

Node.js = environment to run code outside of the browser
- cross-platform
- open-source server
- uses JS

Node.js:
- enables creation of full-stack applications with a single language (JS)
    - resulting in a cleaner and more consistent codebase
- facilitates rapid data transfer, allows asynchronous operations, is scalable, and has a large number of free tools.

Exports and Requires
- Node also facilitates file organization through module.exports and requires

*/

/*
// module.exports: 
// data.js
const supplies = ["firewood", "matches", "tent", "water"]; 

module.exports = supplies

// requires: 
// index.js
const supplies = require(".data.js") 
console.log(supplies);

// module.exports:
//      - Defintion: it will allow you to export, or "ship out", data from one file (aka module) to another.
// require: 
//      - it will allow you to import, or "bring in", data from another file to this file. 
//      - Skeleton syntax: 
//            - example: 
//   



//SCOPES:

// Global scope:

let globalVarA = "A"
let globalVarB = "B"

if (globalVarA === "A") {
    console.log("blah blah")
} 

// Functional Scope
function functionalScopeExample(paramOne) {
    let funcScopeVar = "I am a funky functional scope var"
    console.log(funcScopeVar)
}



// Block Scope
    // Def --> a whole lot like city governments within a country's individual states
    // Def --> technically, block scope refers to any variables or functions that are contained within any pair of curly bracket (think of any pair of curly brackets like the borders of a city). 

let globalVarC = "C"

if(globalVarC --- "C") {
    console.log("We have access to this var.")

    let blockScopeVar = "Im a block scope var"

    console.log(blockScopeVar)
}


// Examploe of a function inside of a function 
function inceptionFunc() {

    function leoDicaprioDreamJump () {

    }
} */


// Practical Example

function findSumOfArray (arrOfNum) {
    let sumTracker = 0;

    for (let i = 0; i < arrOfNum.length; i++) {
        let currNum = arrOfNum[i]; 

        sumTracker = sumTracker + currNum
    }

    return sumTracker
}

findSumOfArray([1, 2, 3])