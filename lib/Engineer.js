const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    //methods
    getGithub(){
        return this.github
    }

    getRole(){
//returns Engineer
        return 'Engineer'
    }
}

module.exports = Engineer;