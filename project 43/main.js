"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
const magicians = ["Harry Potter", "Dynamo", "Criss Angel", "Teller", "Ricky Jay"];
function show_magician(magician) {
    for (const i of magician) {
        console.log(i);
    }
}
function make_great(magicians) {
    const greatMagician = magicians.map(magician => `The Great ${magician}`);
    return (greatMagician);
}
const NamesOfGreatMagician = make_great(magicians);
console.log("Orignal Magicians:");
show_magician(magicians);
console.log("\nThe Great Magicians: ");
show_magician(NamesOfGreatMagician);
