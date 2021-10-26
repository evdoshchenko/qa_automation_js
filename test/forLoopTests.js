describe("for loop",()=> {
    it("should go over array values",()=>{
        const myCars = ["firstCar", "secondCar", "and Another car"]

        for (let i=0; i< myCars.length; i++) {
            console.log(myCars[i])
        }
    });

    it("should log even unidentified values",()=>{
        const myCars = ["firstCar", "secondCar", "and Another car"]

        for (let i=0; i<= myCars.length; i++) {
            console.log(myCars[i])
        }
    });

})