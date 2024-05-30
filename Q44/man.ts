
// Define a functionn with a parameter that accept items argument reprsenting oursandwich
function makesandwich(... items: string[]){

    console.log("Making a sandwich with the following items : \n")

items.forEach(singleItem => console.log(singleItem));

console.log("\n Now Enjoy sandwich")
}

// call the function 3 times with 3 diferent number of arguments

makesandwich("chien","cheese", "mayo","Egg");
makesandwich("Bread", "Butter");
makesandwich("Bread","Butter", "Mayo", "Chese", "Chicken","Letuce")