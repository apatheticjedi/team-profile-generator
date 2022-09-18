const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
    expect(employee.role).toBe('Employee');
});

test("gets employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe(expect.any(String));
});

test("gets employee's email", () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets employee's id", () => {
    const employee = new Employee('Dave');

    expect(employee.getId()).toBe(expect.any(Number));
});

test("gets employee's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Employee');
});