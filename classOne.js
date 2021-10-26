let xx = 6;
let x, y, z;
y = 3;
z = 5;

let carName1 = "Volvo XC60";

const myCars = [carName1, "anotherCar"]
let firstCar = myCars[0];
let secondCar = myCars[1];

console.log(firstCar);

function printCarNames(firstCar, secondCar){
    console.log(firstCar);
    console.log(secondCar);
}

function multiOfTwo(p1,p2) {
    return p1*p2;
}

let result = multiOfTwo(2,4);

printCarNames(myCars[0], myCars[1]);

console.log(result)