"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicians = ["Harry Potter", "Dynamo", "Criss Angel", "Teller", "Ricky Jay"];
function show_magicians(magician) {
    for (const i of magician) {
        console.log(`${i}`);
    }
}
function make_great(magician) {
    const Greatmagician = magician.map(Magician => `The Great ${Magician}`);
    return (Greatmagician);
}
const TheGreatMagician = make_great(magicians);
console.log("Orignal Magicians:");
show_magicians(magicians);
console.log("\nThe Great Magicians:");
show_magicians(TheGreatMagician);
