const Manager = require("../lib/Manager")

test("Creates Manager object using constructor function and returns manager name", () => {
    const manager = new Manager("Jill the Manager", 98765, "Manager@gmail.com", 82);

    expect(manager.getName()).toBe("Jill the Manager")
})



test("Creates manager object using constructor function and returns manager ID number", () => {
    const manager = new Manager("Jill the Manager", 98765, "Manager@gmail.com", 82);

    expect(manager.getId()).toBe(98765);
})


test("Creates manager object using constructor function and returns manager Email address", () => {
    const manager = new Manager("Jill the Manager", 98765, "Manager@gmail.com", 82);

    expect(manager.getEmail()).toBe('Manager@gmail.com');
})


test("Creates manager object using constructor function and returns manager office number", () => {
    const manager = new Manager("Jill the Manager", 98765, "Manager@gmail.com", 82);

    expect(manager.officeNumber).toBe(82);
})


test("Creates manager object using constructor function and returns correct role", () => {
    const manager = new Manager("Jill the Manager", 98765, "Manager@gmail.com", 82);

    expect(manager.getRole()).toBe('Manager');
})

