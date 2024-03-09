"use strict";
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
// FIRST METHOD
function make_shirt(size, message) {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
}
make_shirt("large", "Governor IT Project");
console.log("\n");
// SECOND METHOD
function makeShirt(size, message) {
    console.log(`Size: ${size}`);
    console.log(`Message ${message}`);
}
let size = "Medium";
let message = "IT PROJECT";
makeShirt(size, message);
