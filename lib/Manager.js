const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //methods
    getOfficeNumber(){
        this.officeNumber
    }

    getRole(){
//returns Manager
        return 'Manager'
    }
}

module.exports = Manager;