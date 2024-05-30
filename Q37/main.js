"use strict";
// Making a function
function make_shirt(size = "large", printMessage = "I love Typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`);
}
// colling a function
make_shirt();
// calling a function now with medium size and defoult message
make_shirt("meduim");
// calling a function now with Small size and differnet print message
make_shirt("small", "I love Javascript");
