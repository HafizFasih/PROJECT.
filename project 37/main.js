"use strict";
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size = "Large", message = "Typescript") {
    console.log(`SIZE: ${size}`);
    console.log(`MESSAGE: ${message}`);
}
make_shirt();
console.log("\n");
make_shirt("Medium");
console.log("\n");
make_shirt("Small", "Javascript");
