//create Employee class

class Employee {
//constructor
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//methods
    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
//returns Employee
        return 'Employee'
    }
}

module.exports=Employee;