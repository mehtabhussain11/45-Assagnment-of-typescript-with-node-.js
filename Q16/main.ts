let guestlist:Array<string> = [

    "Saleem",
    "Altaf",
    "Zeeshan",
];
console.log("Good News! We have found a bigger table for dinner")

guestlist.unshift("Rab Nawaz")

guestlist.push("Ali")

let middleindex: number = Math.floor (guestlist. length / 2)

 guestlist.splice(middleindex,0 ,"Mehtab");

 console.log("updated list for our guest")
 guestlist.forEach(oneguest => console.log(`Asalamo Alaikum ${oneguest} woud you like to dinner with me`));