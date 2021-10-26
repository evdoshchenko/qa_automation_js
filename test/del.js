import Car from '../test/car.js';


describe("comparison operator", () => {
    it('car should be able turn and stop', () => {
        let myCar = new Car("Ford",2004);
        let yourCar = new Car("BMW", 1997);
        myCar.stop();
        myCar.drive();
        yourCar.turningLight();
        yourCar.turningRight();

    });


});


