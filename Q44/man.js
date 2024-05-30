// Define a functionn with a parameter that accept items argument reprsenting oursandwich
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items : \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy sandwich");
}
// call the function 3 times with 3 diferent number of arguments
makesandwich("chien", "cheese", "mayo", "Egg");
makesandwich("Bread", "Butter");
makesandwich("Bread", "Butter", "Mayo", "Chese", "Chicken", "Letuce");
