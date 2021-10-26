export class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    drive(){
        console.log(this.name+" is driving");
    }
    stop(){
        console.log(this.name+" is stopping");
    }
    turningRight(){
        console.log(this.name+" is turning right")
    }
    turningLight(){
        console.log(this.name+" is turning light")
    }

};

export class Airplane {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    fly(){
        console.log(this.name+" is flying");
    }
};

