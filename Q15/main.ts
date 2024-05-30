let guestlist: Array<string> = [

"Zeeshan",
"Altaf",
"Amir",

];

let guestHowCantMakeIt: string = "Amir"
console.log(`${guestHowCantMakeIt} can not make it to dinner`)

let NewGuest:string = "Saleem"
let indexOfguestHowCantMakeIt:number = guestlist.indexOf
(guestHowCantMakeIt)
//console.log(indexOfguestHowCantMakeIt)

if (indexOfguestHowCantMakeIt !== -1)

    {
guestlist[indexOfguestHowCantMakeIt] = NewGuest

    }
   // console.log(guestlist[2])

   console.log("second set of invitation message")
   guestlist.forEach(
    (guest:string )=>{
        console.log(`Dear ${guest} You are invited to Dinner`)
} )