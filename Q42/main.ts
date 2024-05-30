function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log (name))
}

// function to a make magicians great through . map () it will modify array
function make_great(magicians: string[]){
 return magicians.map(name => `The Great ${name}`);
}

// Define an array of magecian names
let magicians_names = ["Mehtab ", "Alaf","Saleem"]

// call make_great function to modify magician names
make_great(magicians_names);
 let great_magicians = make_great(magicians_names)
 
 // call show_magician that show modified list of magician
 show_magicians(great_magicians)