const Intern = require('../lib/Intern');

test("gets intern's role", () => {
    const employee = new Intern('Dave');

    expect(employee.getRole()).toBe('Intern');
});

test("gets intern's school", () => {
    const employee = new Intern('Dave', 1, 'dave@email.com', 'UofO');

    expect(employee.getSchool()).toBe('UofO');
});