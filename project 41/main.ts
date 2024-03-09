// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magicianName: string [] = ["Dynamo","Teller","Criss Angel","Derren Brown","Ricky Jay"]
function show_magicians(magicianName: string []):void {
    for(const magician of magicianName){
        console.log(magician)
    }
}



show_magicians(magicianName)