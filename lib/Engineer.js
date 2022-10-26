//require Employee
const Employee = require('./Employee');

//constructor extending Employee class and adding github to Engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //methods
    //returns github
    //only use github which is not included in Employee
    getGithub() {
        return this.github
    }

    getRole() {
        //returns Engineer
        return 'Engineer'
    }
}

module.exports = Engineer;