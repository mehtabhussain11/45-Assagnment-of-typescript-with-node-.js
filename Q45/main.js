// define a function to creat a car object with optinal optins..
function creat_car(manufacture, model) {
    // Initialize a car object with manufacturer and model
    var optins = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optins[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model
    };
    // Add addintional options to the car object
    optins.forEach(function (Option) {
        var _a = Option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call a function to creat a car object
var my_car = creat_car("Toyota", "Corolla", "Colour : Black", "sunroof : True");
// print the  variableto ensure all the information is stored correcrtly in the car object
console.log(my_car);
