const Employee = require('../lib/Employee');

test("gets Manager's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Manager');
});