const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(typeof(employee)).toBe('object');
});

test("gets employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});

test("gets employee's email", () => {
    const employee = new Employee('Dave', 1, 'dave@email.com');

    expect(employee.getEmail()).toBe('dave@email.com');
});

test("gets employee's id", () => {
    const employee = new Employee('Dave', 1);

    expect(employee.getId()).toBe(1);
});

test("gets employee's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Employee');
});