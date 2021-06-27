const Employee = require("../lib/Employee")

test("Creates Employee object using constructor function and returns employee name", () => {
    const employee = new Employee("Jane the Employee", 56789, "Jane@gmail.com");

    expect(employee.getName()).toBe("Jane the Employee")
})


test("Creates employee object using constructor function and returns employee ID number", () => {
    const employee = new Employee("Jane the Employee", 56789, "Employee@gmail.com");

    expect(employee.getId()).toBe(56789);
})


test("Creates employee object using constructor function and returns employee Email address", () => {
    const employee = new Employee("Jane the Employee", 56789, "Employee@gmail.com");

    expect(employee.getEmail()).toBe('Employee@gmail.com');
})


test("Creates employee object using constructor function and returns correct role", () => {
    const employee = new Employee("Jane the Employee", 56789, "Employee@gmail.com");

    expect(employee.getRole()).toBe('Employee');
})

