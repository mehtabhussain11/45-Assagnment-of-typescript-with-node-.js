var userName = ["Ali", "Ahmed", "Zeeshan", "Altaf", "Admin"];
// usin forEach loop on array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log(("hellow ".concat(oneUser, ", would you like to see a status a report?")));
    }
    else {
        console.log("hellow ".concat(oneUser, ",thank you for loging again"));
    }
});
