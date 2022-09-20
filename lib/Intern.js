const inquirer = require('inquirer');
const Employee = require('./Employee')

// extend Employee class with school information to create Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;