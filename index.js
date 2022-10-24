const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');
const fs = require('fs');
const template = require('./src/template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the manager's ID?",
    },
    {
        type: 'input',
        name: 'managerEmailAddress',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the manager's office number?",
    },
];

const employeesQuestion =
{
    type: 'list',
    name: 'addEmployees',
    message: 'Which employee would you like to add next?',
    choices: ['Intern',
        'Engineer']
};

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID?",
    },
    {
        type: 'input',
        name: 'engineerEmailAddress',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'engineerOfficeNumber',
        message: "What is the engineer's office number?",
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "What is the engineer's GitHub username?",
    },

];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID?",
    },
    {
        type: 'input',
        name: 'internEmailAddress',
        message: "What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'internOfficeNumber',
        message: "What is the intern's office number?",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is th name of the intern's school?",
    },

];

// TODO: Create a function to write HTML file
function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app and ask questions
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating your application');
        writeFile('team.html', template({ ...inquirerResponses }));
    });
};

// Function call to initialize app
init();
