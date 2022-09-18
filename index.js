const inquirer = require('inquirer');
const fs = require('fs');
const templateData = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeInfo = [];

const managerQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Manager's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Manager's ID number:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Manager's email address:"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the Manager's office number:"
    }
];

const engineerQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Engineer's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Engineer's ID number:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Engineer's email address:"
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the Engineer's GitHub username:"
    }
];

const internQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Intern's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Intern's ID number:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Intern's email address:"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does this intern attend?"
    }
];

const promptManager = () => {
    inquirer.prompt(managerQuestion)
        .then(managerInfo => {
            const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            employeeInfo.push(manager);
            console.log(employeeInfo);
        }).then(promptAdd)
}

const promptEngineer = () => {
    inquirer.prompt(engineerQuestion)
        .then(engineerInfo => {
            const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
            employeeInfo.push(engineer);
        }).then(promptAdd)
}

const promptIntern = () => {
    inquirer.prompt(internQuestion)
        .then(internInfo => {
            const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
            employeeInfo.push(intern);
        }).then(promptAdd)
}

const promptAdd = () => {
    inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'Would you like to add more team members?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
    }).then((data) => {
    if (data.options === 'Add Engineer') {
        promptEngineer();
    } else if (data.options === 'Add Intern') {
        promptIntern();
    } else {
        console.log(employeeInfo);
    }
    return;
    })
}

promptManager();