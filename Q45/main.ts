
// define a function to creat a car object with optinal optins..
function creat_car(manufacture , model, ... optins){
 // Initialize a car object with manufacturer and model

 let car ={
    manufacture:manufacture,
    model: model
 };

 // Add addintional options to the car object
 optins.forEach(Option=>{
    let[key, value] = Option.split(":");

    car[key.trim()] = value.trim();
 });

 return car;
}

// call a function to creat a car object

let my_car = creat_car("Toyota", "Corolla", "Colour : Black","sunroof : True" );

// print the  variableto ensure all the information is stored correcrtly in the car object

console.log(my_car)