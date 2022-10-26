const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');
const fs = require('fs');
const template = require('./src/template.js');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let employeesArray = [];

function createManager () {
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
    inquirer.prompt(managerQuestions).then((inquirerResponses) => {
        const manager = new Manager (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.officeNumber);
        employeesArray.push(manager);
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


function createEngineer () {
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
    inquirer.prompt(engineerQuestions).then((inquirerResponses) => {
        const engineer = new Engineer (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.github);
        employeesArray.push(engineer);
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

function createIntern() {
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
    inquirer.prompt(internQuestions).then((inquirerResponses) => {
        const intern = new Intern (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.school);
        employeesArray.push(intern);
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


// TODO: Create a function to write HTML file
function writeHTML() {
    console.log(employeesArray);
    fs.writeFile('./dist/index.html', template.generateTemplate(employeesArray), (err) =>
    err ? console.error(err) : console.log('Page created!'));

}

createManager();
