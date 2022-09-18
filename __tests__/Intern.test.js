const Employee = require('../lib/Employee');

test("gets intern's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Intern');
});

test("gets intern's school", () => {
    const employee = new Employee('Dave');

    expect(employee.getSchool()).toEqual(expect.any(String));
});