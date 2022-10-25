const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //methods
    getName(name){

    }

    getId(id){

    }

    getEmail(email){

    }
    getOfficeNumber(officeNumber){

    }

    getRole(){
//returns Manager

    }
}

// const Manager = new Manager ();