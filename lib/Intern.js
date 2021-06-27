const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
}

getRole() {
    this.role = "Intern";
    return this.role
}

getSchool() {
    return this.school
}
}

let test = new Intern('Navin', '123', 'abc', 'UTM')

const testing = function() {
    console.log(test.getSchool())
}

testing();
