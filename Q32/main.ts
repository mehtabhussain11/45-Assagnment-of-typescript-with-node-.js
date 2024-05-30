
// Array of current users
let current_users  = ["Tofique", "Sohail", "Saleem", "Altaf", "Zeeshan"]

// Array of new users
let new_users = ["Mehtab", "Amir","Altaf", "Ali Raza", "Saleem"]

//loop through new_users to check for username ability

new_users.forEach(new_one_user => {
    // making a condition for user name already exist and save in our _ condition variable
    let our_cundition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    // print different message using if-else statment
    if(our_cundition){

console.log(`sorry${new_one_user} is already taken`)
    } else{
        console.log(`This username${new_one_user} is available`)
    }
})
