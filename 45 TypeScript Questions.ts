"use strict";
// Define an array of numbers
let n = [10, 20, 30, 40, 50];
// Iterate through the array and print each value
for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
}
let num = [8, 3, 34, 898];
for (let index = 0; index < num.length; index++) {
    console.log(num[index]);
    if (num[index] == 34) {
        console.log("this is the number 34 in your series");
    }
    if (num[index] != 34) {
        console.log("This is other number than 34");
    }
}
// 1
// Install Node.js, TypeScript and VS Code on your computer
// Question 1
console.log("This is staring of Assignment");
const personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
// Question 2
const personName1 = "John Doe";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
console.log(personName1.charAt(0).toUpperCase() + personName1.slice(1).toLowerCase());
// Question 3
const quote = 'A person who never made a mistake never tried anything new.';
const author = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);
// Question 4
const famous_person = 'Albert Einstein';
const message = `${famous_person} once said, "${quote}"`;
console.log(message);
// Question 5
const nameWithWhitespace = '\t   John Doe  \n';
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());
// Question 6
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Question 7
const favoriteNumber = 42;
console.log(`My favorite number is ${favoriteNumber}`);
// Question 8
// Program 1: This program calculates the sum of two numbers
const num1 = 5;
const num2 = 3;
console.log(num1 + num2);
// Program 2: This program checks if a given number is even or odd
const number = 17;
if (number % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
console.log(4 + 4);
console.log(16 - 16);
console.log(64 / 8);
// Question 9
const names = ["John", "Jane", "Alice"];
names.forEach((personName) => console.log(personName));
const space = ['a', 'b', 'c'];
let abc = "hello.......................................................................";
console.log('this is my favourite', `${abc}`);
// Question 10
const names1 = ["John", "Jane", "Alice"];
names1.forEach((personName) => console.log(`Hello ${personName}, it's nice to see you.`));
// Question 11
const transportation = ["car", "motorcycle", "bicycle"];
transportation.forEach((item) => console.log(`I would like to own a ${item}.`));
// Question 12
const guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner. Please join us.`));
// Question 13
const guests1 = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log(`${guests1[1]} can't make it to dinner.`);
guests[1] = "Isaac Newton";
guests.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner. Please join us.`));
// Question 14
const guests2 = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log("Good news! We found a bigger dinner table.");
guests2.unshift("Isaac Newton");
guests2.splice(2, 0, "Galileo Galilei");
guests2.push("Leonardo da Vinci");
guests2.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner. Please join us.`));
// Question 15
const guests3 = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log("We apologize, but the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two guests for dinner.");
while (guests3.length > 2) {
    const removedGuest = guests3.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
guests.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner. Please join us.`));
guests.length = 0;
console.log(guests);
// Question 16
const placesToVisit = ["Paris", "Tokyo", "Cairo", "New York", "Rome"];
console.log("Original order:");
console.log(placesToVisit);
console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort());
console.log("Original order (still):");
console.log(placesToVisit);
console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("Original order (still):");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Original order (reversed again):");
console.log(placesToVisit);
console.log("Sorted order:");
console.log(placesToVisit.slice().sort());
console.log("Reverse sorted order:");
console.log(placesToVisit.slice().sort().reverse());
// Question 17
const dinnerGuests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
console.log(`The number of people invited to dinner is ${dinnerGuests.length}.`);
// Question 18
const items = ["mountains", "rivers", "countries", "cities", "languages"];
// Array of items
console.log(items);
// Array of TypeScript objects
const obj = [
    { name: "mountains" },
    { name: "rivers" },
    { name: "countries" },
    { name: "cities" },
    { name: "languages" },
];
console.log(obj);
const obj1 = { name: 'honta', type: 'car' };
console.log("this is ...............................", obj1.name);
// Question 19
console.log(items[10]); // This will throw an "index out of bounds" error
// Question 20
const car = "subaru";
console.log(`Is car == 'subaru'? I predict ${car == "subaru"}.`);
// Add more conditional tests...
// Question 21
const car1 = "Subaru";
console.log(car1 == "subaru");
console.log(car1.toLowerCase() == "subaru");
// Add more conditional tests...
// Question 22
const alienColor = "green";
if (alienColor === "green") {
    console.log("The player just earned 5 points.");
}
// Add another version of this program that fails the if test
// Question 23
const alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Add another version of this program that runs the else block
// Question 24
const alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("The player just earned 5 points.");
}
else if (alienColor2 === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alienColor2 === "red") {
    console.log("The player just earned 15 points.");
}
// Add three versions of this program, one for each color
// Question 25
const age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 26
const favoriteFruits = ["banana", "apple", "orange"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
// Add more if statements for other fruits
// Question 27
const userName1 = ["admin", "user1", "user2", "user3", "user4"];
userName1.forEach((name) => {
    if (name === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
});
// Question 28
const userName = ["admin", "user1", "user2", "user3", "user4"];
if (userName.length === 0) {
    console.log("We need to find some users!");
}
// Remove all usernames from the array and check the message
// Question 29
const currentUsers = ["user1", "user2", "user3"];
const newUsers = ["user2", "user4", "user5"];
newUsers.forEach((user) => {
    if (currentUsers.includes(user)) {
        console.log(`Sorry, ${user}, you will need to enter a new username.`);
    }
    else {
        console.log(`Congratulations, ${user}, your username is available.`);
    }
});
// Question 30
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    let ending;
    switch (number) {
        case 1:
            ending = "st";
            break;
        case 2:
            ending = "nd";
            break;
        case 3:
            ending = "rd";
            break;
        default:
            ending = "th";
    }
    console.log(`${number}${ending}`);
});
// Question 31
const pizzaNames = ["pepperoni", "margherita", "veggie"];
pizzaNames.forEach((pizzaName) => {
    console.log(`I like ${pizzaName} pizza.`);
});
console.log("I really love pizza!");
// Question 32
const animals = ["dog", "cat", "rabbit"];
animals.forEach((animal) => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// Question 33
function make_shirt1(size, message) {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}
make_shirt1("L", "I love TypeScript");
make_shirt1("M", "Hello World!");
make_shirt1("S", "Coding is fun!");
// Question 34
function make_shirt(size = "L", message = "I love TypeScript") {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}
make_shirt();
make_shirt("M");
make_shirt("S", "Hello World!");
// Question 35
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
// Question 36
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
// Question 37
function make_album(artist, title) {
    return {
        artist: artist,
        title: title,
    };
}
const album11 = make_album("Artist 1", "Album 1");
const album21 = make_album("Artist 2", "Album 2");
const album31 = make_album("Artist 3", "Album 3");
console.log(album11);
console.log(album21);
console.log(album31);
// Question 38
function make_album1(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    return album;
}
const album1 = make_album("Artist 1", "Album 1");
const album2 = make_album("Artist 2", "Album 2");
console.log(album1);
console.log(album2);
// Question 39
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
const magicians = ["Magician 1", "Magician 2", "Magician 3"];
show_magicians(magicians);
// Question 40
function make_great(magicians) {
    return magicians.map((magician) => magician + " the Great");
}
const magicians1 = ["Magician 1", "Magician 2", "Magician 3"];
const greatMagicians1 = make_great(magicians1);
show_magicians(greatMagicians1);
// Question 41
function make_great1(magicians) {
    return magicians.map((magician) => magician + " the Great");
}
const magicians2 = ["Magician 1", "Magician 2", "Magician 3"];
const greatMagicians = make_great([...magicians2]);
show_magicians(magicians2);
show_magicians(greatMagicians);
// Question 42
function sandwich(...ingredients) {
    console.log(`You ordered a sandwich with ${ingredients.join(", ")}.`);
}
sandwich("bread", "lettuce", "tomato");
sandwich("bread", "cheese", "ham", "mayo", "mustard");
sandwich("bread", "peanut butter", "jelly");
// Question 43
function carInfo(manufacturer, model, options) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    Object.assign(car, options);
    console.log(car);
}
carInfo("Honda", "Civic", { color: "blue", features: "GPS, Bluetooth" });
carInfo("Toyota", "Corolla", { color: "red", features: "Backup camera" });
console.log("This is End of Document");
