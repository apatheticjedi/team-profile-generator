const Employee = require('../lib/Employee');

test("gets engineer's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Engineer');
});

test("gets Engineer's github username", () => {
    const employee = new Employee('Dave');

    expect(employee.getGithub()).toEqual(expect.any(String));
});