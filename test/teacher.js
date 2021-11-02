import Person from "./person.js";

export default class Teacher extends Person{

    constructor(name, lastname, age, gender, skills, subject, grade) {
        super(name, lastname, age, gender, skills);

        this.subject = subject;
        this.grade = grade;
    }


}


