function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log (name))
}

// function to a make magicians great through . map () it will modify array
function make_great(magicians: string[]){
 return magicians.map(name => `The Great ${name}`);
}

// Define an array of magecian names
let magicians_names = ["Mehtab ", "Alaf","Saleem"]

// making a copy of orignal array through .slice ( )function

let copy_magician_names = magicians_names.slice()

// modify the copied array to include "THe great" with their names

let  copy_great_megicians = make_great(copy_magician_names);

// show both arrays original and copied


// original

console.log("original array")
show_magicians(magicians_names);

// copy
console.log("copied array")
show_magicians(copy_great_megicians);
