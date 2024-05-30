var guestlist = [
    "Saleem",
    "Altaf",
    "Zeeshan",
];
console.log("Good News! We have found a bigger table for dinner");
guestlist.unshift("Rab Nawaz");
guestlist.push("Ali");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Mehtab");
console.log("updated list for our guest");
guestlist.forEach(function (oneguest) { return console.log("Asalamo Alaikum ".concat(oneguest, " woud you like to dinner with me")); });
