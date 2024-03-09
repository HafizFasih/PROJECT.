/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

const animalList: string[] = ["cats","dog","fish"]
console.log("The names of the pets are:")
for (let i =0; i < animalList.length; ++i){
    console.log(animalList[i])
}
console.log("\nOne line for each of them,")
    for(let pet of animalList){
        if(pet === "cats"){
            console.log(`The ${pet} are connoisseurs of comfort.`)
        }else if(pet === "dog"){
            console.log(`The ${pet} is a responsible animal.`)
        }else
        {console.log(`There's nothing like having a ${pet} in your life!`)}}
console.log("\n These animals would make a great pet!")        

