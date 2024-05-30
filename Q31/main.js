var userNames = ["Ali", "Ahmed", "Zeeshan", "Altaf", "Admin"];
userNames = [];
if (userNames.length === 0) {
    console.log(" you are Array is empty we need to some users!");
}
else {
    // usin forEach loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log(("hellow ".concat(oneUser, ", would you like to see a status a report?")));
        }
        else {
            console.log("hellow ".concat(oneUser, ",thank you for loging again"));
        }
    });
}
