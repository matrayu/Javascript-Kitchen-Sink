// Adding first few variables

let myName = 'Matthew';
const states = 50;
let adding = 5 + 4;

function sayHello(msg) {
    return msg;
}

console.log(sayHello('Hello World!'));

function checkAge(name, age) {
    if (age < 21) {
        return ("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        return ("Welcome to the site!");
    }
}

console.log(checkAge('Charles', 21));
console.log(checkAge('Abby', 27));
console.log(checkAge('James', 18));
console.log(checkAge('John', 17));

/*array uses square brackets
*/

let veggies = ['carrots', 'potatos', 'asparagus', 'sprouts', 'mushrooms'];

/*
for (let i of veggies) {
    console.log(i);
}
*/
for (i = 0; i < veggies.length; i++) {
    //console.log('Fav Veggies');
    console.log(veggies[i]);
}


/* An array consisting of 5 different object with each have two varibles, 'Name'
and 'Age' to be called upon or used as arguments.
*/

let persons = [
    { Name: 'Matt', Age: 38 },
    { Name: 'Abby', Age: 20 },
    { Name: 'James', Age: 17 },
    { Name: 'Charles', Age: 27 },
    { Name: 'John', Age: 15 },
];

for (i = 0; i < persons.length; i++) {
    //console.log(persons[i].Name, persons[i].Age);
    console.log(checkAge(persons[i].Name, persons[i].Age));
}

/*
Create a function called getLength that takes any word as an argument. 
The function should return the number of characters in the string.
Call the getLength function, passing 'Hello World' as the argument. 
Store the returned result of that function in a variable.
If the number is even, display 'The world is nice and even!' 
in the developer console. Otherwise if the number is odd, 
display 'The world is an odd place!' in the developer console.
*/

function getLength(word) {
    x = word.length;
    if (x % 2 == 0) {
        return ('The world is nice and even!');
    } else {
        return ('The world is an odd place!');
    }
}

console.log(getLength('Hellow World!'));