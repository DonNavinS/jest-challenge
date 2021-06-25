const fs = require('fs')
const inquirer = require('inquirer')
const imported = require('./HTMLContent')


const questions = [
    {name: 'Title',
    type: 'input',
    message: 'What is your team name?'
    },
    {name: 'ManagerName',
    type: 'input',
    message: 'What is your name?'
    },
    {name: 'ManagerID',
    type: 'input',
    message: 'What is your ID number?'
    },
    {name: 'ManagerEmail',
    type: 'input',
    message: 'What is your email?'
    },
    {name: 'ManagerGithub',
    type: 'input',
    message: 'What is your Github?'
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
    {name: "EngineerName",
    type: "input",
    message: "What is the engineer's name?"
    },
    {name: "EngineerID",
    type: "input",
    message: "What is the engineer's ID number?"
    },
    {name: "EngineerEmail",
    type: "input",
    message: "What is the engineer's email?"
    },
    {name: "EngineerGithub",
    type: "input",
    message: "What is the engineer's Github?"
    }
]


const InternQuestions = [
    {name: "InternName",
    type: "input",
    message: "What is the Intern's name?"
    },
    {name: "InternID",
    type: "input",
    message: "What is the Intern's ID number?"
    },
    {name: "InternEmail",
    type: "input",
    message: "What is the Intern's email?"
    },
    {name: "InternGithub",
    type: "input",
    message: "What is the Intern's Github?"
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


inquirer.prompt(questions).then(function(answers) {
    generateHTML('team-roster.html', imported.HTMLContent(answers));

    if (answers.ManagerGithub) {
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
})


.catch((error) => {
    if (error){
        console.log(error)
    }
})



const BuildEngineerHTML = function(){
    inquirer.prompt(EngineerQuestions).then(function(answers){
        AppendHTML('team-roster.html', imported.EngineerHTML(answers));
})
.catch((error) => {
    if (error){
        console.log(error)
    }
})
}

const BuildInternHTML = function(){
    inquirer.prompt(InternQuestions).then(function(answers){
        AppendHTML('team-roster.html', imported.InternHTML(answers));
})
.catch((error) => {
    if (error){
        console.log(error)
    }
})
}

// const CloseHTML = function(){

// 