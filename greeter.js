function greet(name, surname){
    result = "Hello + " + name + " " + surname;
    console.log(result);
}

function addOfTwo(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    return result;
}

greet("John");

greet("John","Doe");

let summary = addOfTwo(2,4);
console.log(summary);

const people = ["Ivan","Eblan","Lox"];

people.pop();

console.log(people);
people.push("Soska");
console.log(people);

people.shift();

console.log(people);
people.unshift("Soska");
console.log(people);