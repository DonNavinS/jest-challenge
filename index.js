const fs = require('fs')
const inquirer = require('inquirer')
const HTMLContent = require('./HTMLContent')


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


const generateHTML = function(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
    })
}  
inquirer.prompt(questions).then(function(answers) {
    generateHTML('team-roster.html', HTMLContent(answers))
})

.catch((error) => {
    if (error){
        console.log(error)
    }
})