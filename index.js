//include necessary packages

const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');
const fs = require('fs');

//include const for all team members and the employee class
//make sure to require template.js to generate html there
const template = require('./src/template.js');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//create array const for inquirer responses
let employeesArray = [];


//function for creating a manager and choosing additional team members
function createManager () {
//inquirer questions specific to manager, plus option to add team members
    const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        },
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Which employee would you like to add next?',
            choices: ['Intern',
                'Engineer',
            'None',]
        },
    ];
//new manager with inquirer responses and push new manager into array
    inquirer.prompt(managerQuestions).then((inquirerResponses) => {
        const manager = new Manager (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.officeNumber);
        employeesArray.push(manager);
//add employees or finish questions and writeHTML, goes to each applicable function as necessary
        switch(inquirerResponses.addEmployees){
            case 'Intern':
            createIntern();
            break;
            case 'Engineer':
            createEngineer();
            break;
            case 'None':
            writeHTML();
        };

    })
}

//function for creating a engineer and choosing additional team members
function createEngineer () {
//inquirer questions specific to engineer, plus option to add team members
    const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
        },
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Which employee would you like to add next?',
            choices: ['Intern',
                'Engineer',
                'None',]
        },
    ];
//new engineer with inquirer responses and push new engineer into array
    inquirer.prompt(engineerQuestions).then((inquirerResponses) => {
        const engineer = new Engineer (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.github);
        employeesArray.push(engineer);
//add employees or finish questions and writeHTML, goes to each applicable function as necessary
        switch(inquirerResponses.addEmployees){
            case 'Intern':
            createIntern();
            break;
            case 'Engineer':
            createEngineer();
            break;
            case 'None':
            writeHTML();
        };

    })
}

//function for creating an intern and choosing additional team members
function createIntern() {
//inquirer questions specific to intern, plus option to add team members
    const internQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the intern's school?",
        },
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Which employee would you like to add next?',
            choices: ['Intern',
                'Engineer',
                'None',]
        },  
    ];
//new intern with inquirer responses and push new intern into array
    inquirer.prompt(internQuestions).then((inquirerResponses) => {
        const intern = new Intern (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.school);
        employeesArray.push(intern);
//add employees or finish questions and writeHTML, goes to each applicable function as necessary
        switch(inquirerResponses.addEmployees){
            case 'Intern':
            createIntern();
            break;
            case 'Engineer':
            createEngineer();
            break;
            case 'None':
            writeHTML();
        };
    })
}


//Function to write HTML file
//file will be located in dist folder under imdex.html
//call the generate template function in template.js and use the data from the employeesArray
//make sure to include console.error
//console.log when page is created
function writeHTML() {
    console.log(employeesArray);
    fs.writeFile('./dist/index.html', template.generateTemplate(employeesArray), (err) =>
    err ? console.error(err) : console.log('HTML created!'));

}

//runs first set of questions in integrated terminal by calling the createManager function
createManager();
