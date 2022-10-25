const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    //methods
    getName(name){

    }

    getId(id){

    }

    getEmail(email){

    }
    getSchool(school){

    }

    getRole(){
//returns Intern

    }
}

// const Intern = new Intern ();