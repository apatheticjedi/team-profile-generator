const inquirer = require('inquirer');
const fs = require('fs');
const templateData = require('./src/page-template')

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Employee's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Employee's ID number:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Employee's email address:"
    }
];

const managerQuestion = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the Manager's office number:"
    }
];

const engineerQuestion = [
    {
        type: 'input',
        name: 'github',
        message: "Enter the Engineer's GitHub username:"
    }
];

const internQuestion = [
    {
        type: 'input',
        name: 'school',
        message: "What school does this intern attend?"
    }
];

const addInfo = [
    {
        type: 'list',
        name: 'options',
        message: 'Would you like to add more team members?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
    }
];

const promptUser = () => {
    return inquirer.prompt(employeeQuestions)
}

const promptManager = () => {
    return inquirer.prompt(managerQuestion)
}

const promptEngineer = () => {
    return inquirer.prompt(engineerQuestion)
}

const promptIntern = () => {
    return inquirer.prompt(internQuestion)
}

const promptAdd = () => {
    return inquirer.prompt(addInfo)
}

promptUser()
    .then(promptManager)
    .then(promptAdd => {
        if(options === 'Add Engineer') {
            promptUser()
            .then(promptEngineer)
            .then(promptAdd)
        } else if(options === 'Add Intern') {
            promptUser()
            .then(promptIntern)
            .then(promptAdd)
        } else {
            fs.writeFile(templateData)
        }
    })