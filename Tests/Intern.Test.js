const Intern = require("../lib/Intern");

test("Creates intern object using constructor function and returns intern name", () => {
    const intern = new Intern("Jack the Intern", 54321, "John@gmail.com");

    expect(intern.getName()).toBe("Jack the Intern")
})


test("Creates intern object using constructor function and returns intern ID number", () => {
    const intern = new Intern("Jack the Intern", 54321, "Intern@gmail.com", "UTM");

    expect(intern.getId()).toBe(54321);
})


test("Creates intern object using constructor function and returns intern Email address", () => {
    const intern = new Intern("Jack the Intern", 54321, "Intern@gmail.com", "UTM");

    expect(intern.getEmail()).toBe('Intern@gmail.com');
})


test("Creates intern object using constructor function and returns intern school", () => {
    const intern = new Intern("Jack the Intern", 54321, "Intern@gmail.com", "UTM");

    expect(intern.getSchool()).toBe('UTM');
})


test("Creates intern object using constructor function and returns correct role", () => {
    const intern = new Intern("Jack the Intern", 54321, "Intern@gmail.com", "UTM");

    expect(intern.getRole()).toBe('Intern');
})

