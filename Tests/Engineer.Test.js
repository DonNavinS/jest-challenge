const Engineer = require("../lib/Engineer");

test("Creates engineer object using constructor function and returns engineer name", () => {
    const engineer = new Engineer("John the Engineer", 12345, "Engineer@gmail.com", 'https://github.com/EngineerJohn');

    expect(engineer.getName()).toBe("John the Engineer")
})


test("Creates engineer object using constructor function and returns engineer ID number", () => {
    const engineer = new Engineer("John the Engineer", 12345, "Engineer@gmail.com", 'https://github.com/EngineerJohn');

    expect(engineer.getId()).toBe(12345);
})


test("Creates engineer object using constructor function and returns engineer Email address", () => {
    const engineer = new Engineer("John the Engineer", 12345, "Engineer@gmail.com", 'https://github.com/EngineerJohn');

    expect(engineer.getEmail()).toBe('Engineer@gmail.com');
})


test("Creates engineer object using constructor function and returns engineer Github username", () => {
    const engineer = new Engineer("John the Engineer", 12345, "Engineer@gmail.com", 'https://github.com/EngineerJohn');

    expect(engineer.getGithub()).toBe('https://github.com/EngineerJohn');
})


test("Creates engineer object using constructor function and returns correct role", () => {
    const engineer = new Engineer("John the Engineer", 12345, "Engineer@gmail.com", 'https://github.com/EngineerJohn');

    expect(engineer.getRole()).toBe('Engineer');
})

