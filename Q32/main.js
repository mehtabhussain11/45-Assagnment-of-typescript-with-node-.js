// Array of current users
var current_users = ["Tofique", "Sohail", "Saleem", "Altaf", "Zeeshan"];
// Array of new users
var new_users = ["Mehtab", "Amir", "Altaf", "Ali Raza", "Saleem"];
//loop through new_users to check for username ability
new_users.forEach(function (new_one_user) {
    // making a condition for user name already exist and save in our _ condition variable
    var our_cundition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different message using if-else statment
    if (our_cundition) {
        console.log("sorry".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username".concat(new_one_user, " is available"));
    }
});
