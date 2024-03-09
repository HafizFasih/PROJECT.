/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

const magicians: string [] = ["Harry Potter","Dynamo","Criss Angel","Teller","Ricky Jay"];

function show_magician(magician: string []):void {
    for(const i of magician){
        console.log(i)
    }
}

function make_great(magicians: string []): string []{
    const greatMagician:string [] = magicians.map(magician  => `The Great ${magician}`)
    return(greatMagician)
}

const NamesOfGreatMagician: string [] = make_great(magicians)

console.log("Orignal Magicians:")
show_magician(magicians)
console.log("\nThe Great Magicians: ")
show_magician(NamesOfGreatMagician)