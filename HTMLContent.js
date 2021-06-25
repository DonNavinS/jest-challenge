
const HTMLContent = function(answers){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <h1>${answers.Title}</h1>

    <div class="container">
        <div>
        <h2>Manager</h2>
        <h3>${answers.ManagerName}</h3>
        <h5>ID #: ${answers.ManagerID}</h5>
        <h5>Email: <a href="mailto:${answers.ManagerEmail}">${answers.ManagerEmail}</a></h5>
        <h5><a href="${answers.ManagerGithub}" target="_blank">Github</a></h5>
        </div>
        
        `

        

}


const EngineerHTML = function(answers){
    return `
    <div>
    <h2>Engineer</h2>
    <h3>${answers.EngineerName}</h3>
    <h5>ID #: ${answers.EngineerID}</h5>
    <h5>Email: <a href="mailto:${answers.EngineerEmail}">${answers.EngineerEmail}</a></h5>
    <h5><a href="${answers.EngineerGithub}" target="_blank">Github</a></h5>
    </div>`
}


const InternHTML = function(answers){
    return `
    <div>
    <h2>Intern</h2>
    <h3>${answers.InternName}</h3>
    <h5>ID #: ${answers.InternID}</h5>
    <h5>Email: <a href="mailto:${answers.InternEmail}">${answers.InternEmail}</a></h5>
    <h5><a href="${answers.InternGithub}" target="_blank">Github</a></h5>
    </div>`
}

module.exports = {HTMLContent, EngineerHTML, InternHTML};