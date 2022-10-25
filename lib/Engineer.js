const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    //methods
    getName(name){

    }

    getId(id){

    }

    getEmail(email){

    }
    getGithub(github){

    }

    getRole(){
//returns Engineer

    }
}

// const Engineer = new Engineer ();