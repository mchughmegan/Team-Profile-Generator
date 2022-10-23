const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');
const fs = require('fs');
const template = require('./src/template');
const Employee = require('')

function buildManager() {

    inquirer.prompt( [
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
    ]).then
};

function buildTeam () {
    const employeesQuestion = [
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Which employee would you like to add next?',
            choices: ['Intern',
            'Engineer',
            'Employee',
    
        ],
            },
    
    ];

    const engineerQuestions =[
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



};



// TODO: Create a function to write HTML file
function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app and call functions to ask questions
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating your application');
        writeFile('team.html', template ({ ...inquirerResponses }));
    });
};

// Function call to initialize app
init();
