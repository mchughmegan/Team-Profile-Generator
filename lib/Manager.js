const Employee = require('./Employee');

//constructor extending Employee class and adding officeNumber to Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //methods
    //returns officeNumber
    //only use officeNUmber which is not included in Employee
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        //returns Manager
        return 'Manager'
    }
}

module.exports = Manager;