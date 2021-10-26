class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    drive(){
        console.log(this.name+" is driving");
    }
    stop(){
        console.log(this.name+" is stoping");
    }
    turningRight(){
        console.log(this.name+" is turning right")
    }
    turningLight(){
        console.log(this.name+" is turning light")
    }

};



export default Car;

