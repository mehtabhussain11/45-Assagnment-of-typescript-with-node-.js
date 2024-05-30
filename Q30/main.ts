let userName = ["Ali", "Ahmed", "Zeeshan", "Altaf", "Admin"]

// usin forEach loop on array
userName.forEach(oneUser => {
if (oneUser === "Admin"){
    console.log((`hellow ${oneUser}, would you like to see a status a report?`))
} else{
    console.log(`hellow ${oneUser},thank you for loging again`)

}
})