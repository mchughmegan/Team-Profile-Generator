//require Employee
const Employee = require('./Employee');

//constructor extending Employee class and adding school to Intern Class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //methods
    //returns school
    //only use school which is not included in Employee
    getSchool() {
        return this.school;
    }

    getRole() {
        //returns Intern
        return 'Intern'
    }
}

module.exports = Intern;