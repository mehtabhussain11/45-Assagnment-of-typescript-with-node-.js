var guestlist = [
    "Zeeshan",
    "Altaf",
    "Amir",
];
var guestHowCantMakeIt = "Amir";
console.log("".concat(guestHowCantMakeIt, " can not make it to dinner"));
var NewGuest = "Saleem";
var indexOfguestHowCantMakeIt = guestlist.indexOf(guestHowCantMakeIt);
//console.log(indexOfguestHowCantMakeIt)
if (indexOfguestHowCantMakeIt !== -1) {
    guestlist[indexOfguestHowCantMakeIt] = NewGuest;
}
// console.log(guestlist[2])
console.log("second set of invitation message");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, " You are invited to Dinner"));
});
