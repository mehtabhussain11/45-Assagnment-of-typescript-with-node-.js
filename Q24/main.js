var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// test for equality and inequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("is apple is not equal to apple");
console.log(apple != "apple");
// tests using lowercase function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
// numerical tests
console.log("\n is ten is ewual to Twenty? ");
console.log(ten == 20);
console.log("\n is ten is not equal to otwenty?");
console.log(ten != 20);
// Greater than
console.log("\n is ten is greater then zero?");
console.log(ten > 0);
// less than
console.log("\n twenty is less than 10");
console.log(twenty < 10);
// Greater than or equal to
console.log("\n ten is greater than and equal to 5 ?");
console.log(ten >= 5);
// less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// tests using "and" & "or" operators
// using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is not  equal to 20");
console.log(20 > 50 || 20 != 20);
// test wheather an item is include in Array 
console.log("\nis orange include in my fruite array");
console.log(fruits.includes("orange"));
console.log("\n is orange is not not include in my array");
console.log(!fruits.includes("orange"));
