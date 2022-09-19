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
        message: "Enter the Manager's name:", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the Manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Manager's ID number:",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log(" is not a valid number!");
                return false;
            } else if (!idInput){
                console.log('Please enter a valid number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Manager's email address:",
        validate: emailInput => {
            if(emailInput.includes('@')) {
                return true;
            } else {
                console.log('Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the Manager's office number:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the office number!");
                return false;
            }
        }
    }
];

const engineerQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Engineer's name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the Engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Engineer's ID number:",
                validate: idInput => {
            if (isNaN(idInput)) {
                console.log(" is not a valid number!");
                return false;
            } else if (!idInput){
                console.log('Please enter a valid number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Engineer's email address:",
        validate: emailInput => {
            if(emailInput.includes('@')) {
                return true;
            } else {
                console.log('Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the Engineer's GitHub username:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid username!");
                return false;
            }
        }
    }
];

const internQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Intern's name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the Intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Intern's ID number:",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log(" is not a valid number!");
                return false;
            } else if (!idInput){
                console.log('Please enter a valid number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Intern's email address:",
        validate: emailInput => {
            if(emailInput.includes('@')) {
                return true;
            } else {
                console.log('Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern attend?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter valid school!");
                return false;
            }
        }
    }
];

const promptManager = () => {
    inquirer.prompt(managerQuestion)
        .then(managerInfo => {
            const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            employeeInfo.push(manager);
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
        fs.writeFile('./dist/index.html', templateData(employeeInfo), err => {
            if (err) {
                throw err;
            }
        })
        console.log('Page created!');
    }
    return;
    })
}

promptManager();