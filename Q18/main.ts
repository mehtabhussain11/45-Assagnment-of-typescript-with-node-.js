let countriestovisit: string []= [

    "China", "Denmark", "Brazil", "Amrica"
];

console.log("orginal odder", countriestovisit);

//print the array in tha alphabetical odder without modify the Actul Array list
console.log("Alphabetical odder", [...countriestovisit].sort());

//show that the Array is still in its orginal odder
console.log("still in orginal odder:", countriestovisit)

// print The Array in recerse odder without modifying the actual array list
console.log("Revese odder:",[...countriestovisit].reverse())


//show that the Array is still in its orginal odder
console.log("still in orginal odder:", countriestovisit)

// we have changed the orinal array
console.log("Orginal Array reversed:",countriestovisit.reverse());

// print the Array to show that its orginal odder
console.log("Back to orginal odder:", countriestovisit.reverse())


// Print the Array to show that its odder has been changed in Alphabetical odder
console.log("sorted in Alphabetical odder:",countriestovisit.sort());

// we have changed again  the orinal Array now in revese odder again
console.log("Orginal Array reversed:",countriestovisit.reverse());
