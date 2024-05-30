// Define a function to print each magiscian name from an array
function show_magicains(magiscian) {
    magiscian.forEach(function (name) { return console.log(name); });
}
// Define an array containing magiscian name
var magiscian_names = ["Mehtab ", "Saleem ", "Altaf"];
// call the function to print each magician name
show_magicains(magiscian_names);
