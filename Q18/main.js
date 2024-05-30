var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestovisit = [
    "China", "Denmark", "Brazil", "Amrica"
];
console.log("orginal odder", countriestovisit);
//print the array in tha alphabetical odder without modify the Actul Array list
console.log("Alphabetical odder", __spreadArray([], countriestovisit, true).sort());
//show that the Array is still in its orginal odder
console.log("still in orginal odder:", countriestovisit);
// print The Array in recerse odder without modifying the actual array list
console.log("Revese odder:", __spreadArray([], countriestovisit, true).reverse());
//show that the Array is still in its orginal odder
console.log("still in orginal odder:", countriestovisit);
// we have changed the orinal array
console.log("Orginal Array reversed:", countriestovisit.reverse());
// print the Array to show that its orginal odder
console.log("Back to orginal odder:", countriestovisit.reverse());
// Print the Array to show that its odder has been changed in Alphabetical odder
console.log("sorted in Alphabetical odder:", countriestovisit.sort());
// we have changed again  the orinal Array now in revese odder again
console.log("Orginal Array reversed:", countriestovisit.reverse());
