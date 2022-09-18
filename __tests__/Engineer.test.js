const Engineer = require('../lib/Engineer');

test("gets engineer's role", () => {
    const employee = new Engineer('Dave');

    expect(employee.getRole()).toBe('Engineer');
});

test("gets Engineer's github username", () => {
    const employee = new Engineer('Dave', 1, 'dave@email.com', 'apatheticjedi');

    expect(employee.getGithub()).toBe('apatheticjedi');
});