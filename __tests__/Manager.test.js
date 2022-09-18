const Manager = require('../lib/Manager')

test("gets Manager's role", () => {
    const employee = new Manager('Dave');

    expect(employee.getRole()).toBe('Manager');
});