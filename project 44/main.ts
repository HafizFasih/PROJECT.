/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function makeSandwitch(...items: string[]):void 
{
    console.log("Sandwitch Summmary: ")
    if(items.length === 0){
        console.log("The list is empty please order some sanwitches.")
    }
    else{
        items.forEach((item,i)=>{
            console.log(`  ${i+1}.${item}`)
        })}
}
console.log("\n")
makeSandwitch()
makeSandwitch("Turkey","Lettuce","Tomato","Peanut butter")
makeSandwitch("Ketchup","Garlic")
makeSandwitch("Onion","Sauce","Chilli Garlic")