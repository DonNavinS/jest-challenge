const fs = require('fs')
const inquirer = require('inquirer')
const imported = require('./HTMLContent')
const Manager = require('./lib/Manager')
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const ManagerQuestions = [
    {name: "Name",
    type: 'input',
    message: "What is the manager's name?"
    },
    {name: "Id",
    type: "input",
    message: "What is the manager's ID number?"
    },
    {name: "Email",
    type: "input",
    message: "What is the manager's email?"
    },
    {name: "OfficeNumber",
    type: "input",
    message: "What is the manager's Office Number?"
    }
]

const NewMember = [
    {name: 'AddMember',
    type: 'list',
    message: 'Would you like to add another member?',
    choices: ["Add an Engineer", "Add an Intern", "Nobody left to add!"]
    }
]

const EngineerQuestions = [
    {name: "Name",
    type: "input",
    message: "What is the engineer's name?"
    },
    {name: "Id",
    type: "input",
    message: "What is the engineer's ID number?"
    },
    {name: "Email",
    type: "input",
    message: "What is the engineer's email?"
    },
    {name: "Github",
    type: "input",
    message: "What is the engineer's Github?"
    }
]


const InternQuestions = [
    {name: "Name",
    type: "input",
    message: "What is the intern's name?"
    },
    {name: "Id",
    type: "input",
    message: "What is the intern's ID number?"
    },
    {name: "Email",
    type: "input",
    message: "What is the intern's email?"
    },
    {name: "School",
    type: "input",
    message: "What school does the intern attend?"
    }
]


const generateHTML = function(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
    })
}  

const AppendHTML = function(fileName, data){
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

// This is what is run when node index.js is entered into the terminal.
// The HTML is first created with only the manager's info, and is then appended 
//if the user chooses to add a Engineer/Intern.

inquirer.prompt(ManagerQuestions).then(function(answers) {
    const manager = new Manager(answers.Name, answers.Id, answers.Email, answers.OfficeNumber);
    generateHTML('team-roster.html', imported.HTMLContent(manager));

    if (answers.OfficeNumber) {
        NewMemberPrompt();
    }
})
.catch((error) => {
    if (error){
        console.log(error)
    }
})


// Gives an additional inquirer to add team members
const NewMemberPrompt = function() {
    inquirer.prompt(NewMember).then(function(answers){
    if (answers.AddMember == "Add an Engineer") {
        BuildEngineerHTML();
    } else if (answers.AddMember == "Add an Intern"){
        BuildInternHTML();
    }
})
.catch((error) => {
if (error) {
    console.log(error)
}
})
}




// These functions are used to begin a new inquirer, and the user input is appended to end of the existing HTML file.
const BuildEngineerHTML = function(){
    inquirer.prompt(EngineerQuestions).then(function(answers){
        const engineer = new Engineer(answers.Name, answers.Id, answers.Email, answers.Github)
        AppendHTML('team-roster.html', imported.EngineerHTML(engineer));

        NewMemberPrompt();
}).catch((error) => {
    if (error){
        console.log(error)
    }
})
}

const BuildInternHTML = function(){
    inquirer.prompt(InternQuestions).then(function(answers){
        const intern = new Intern(answers.Name, answers.Id, answers.Email, answers.School)
        AppendHTML('team-roster.html', imported.InternHTML(intern));

        NewMemberPrompt();
}).catch((error) => {
    if (error){
        console.log(error)
    }
})
}

