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

console.log("unfortuately, the new dinner table wont arrive on time, so Ican only invite two guest to dinner with me");

while(guestlist.length > 2){

let removedGuest = guestlist.pop();
console.log(`sorry ${removedGuest} I cant invite you to dinner`);
}
console.log("Invitations to the last 2 Guest");
guestlist.forEach(lasttwo => console.log (`lucky ${lasttwo}, you are still invited to dinner`));
guestlist.pop();
guestlist.pop();

console.log("Empty list:", guestlist)