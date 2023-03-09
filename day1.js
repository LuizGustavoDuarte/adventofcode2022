const { EOL } = require('os');

let fs = require('fs');

let input = fs.readFileSync('./inputday1.txt', {encoding: 'UTF-8'});

let largest = 0;
let calories = 0;

input.split("\n").map(line => {
    calories += Number(line);
    largest = Math.max(calories, largest)
    line == '' ? calories = 0 : "";
})

console.log(largest)


