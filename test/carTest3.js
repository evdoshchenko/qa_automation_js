import {Car, Airplane} from '../test/car3.js';

describe("comparison operator", () => {
    it('car should be able turn and stop', () => {
        let myCar = new Car("Ford",2004);
        let yourCar = new Car("BMW", 1997);
        myCar.stop();
        myCar.drive();
        yourCar.turningLight();
        yourCar.turningRight();
    });

    it('airplane should be fly', () => {
        let myAirplane = new Airplane("Boing",2021);
        myAirplane.fly();
    });

});


