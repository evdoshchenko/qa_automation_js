const car = {
    type:"Skoda",
    model:"Octavia",
    color:"grey",
    year:2007
};

const cars = ["BMW","Volvo","Mersedes"];

let carColor = car.color;
console.log(carColor);

let isEqual = false;

isEqual = 5 === "5";

console.log(isEqual);

if (car.year>2005 && car.color === "grey") {
    console.log("car is new enough")
} else {
    console.log("car is old")}
;

let text="";
for (let i=0;i<cars.length;i++){
    text+=cars[i]+" ";
}
console.log(text);