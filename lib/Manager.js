const inquirer = require('inquirer');
const Employee = require('./Employee');

// extend Employee class with office number to create Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;