const inquirer = require('inquirer');
const Employee = require('./Employee');

// extend Employee class with GitHub username to create Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
    
    getGithub() {
        return this.github;

    }
}

module.exports = Engineer;