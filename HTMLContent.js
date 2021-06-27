
const HTMLContent = function(manager){
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
    <h1>${manager.name}</h1>

    <div class="container">
        <div>
        <h2>Manager</h2>
        <h3>${manager.name}</h3>
        <h5>ID #: ${manager.id}</h5>
        <h5>Email: <a href="mailto:${manager.email}">${manager.email}</a></h5>
        <h5>${manager.officeNumber}</h5>
        </div>
        
        `

        

}


const EngineerHTML = function(engineer){
    return `
    <div>
    <h2>Engineer</h2>
    <h3>${engineer.name}</h3>
    <h5>ID #: ${engineer.id}</h5>
    <h5>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h5>
    <h5><a href="${engineer.github}" target="_blank">Github</a></h5>
    </div>`
}


const InternHTML = function(intern){
    return `
    <div>
    <h2>Intern</h2>
    <h3>${intern.name}</h3>
    <h5>ID #: ${intern.id}</h5>
    <h5>Email: <a href="mailto:${intern.email}">${intern.email}</a></h5>
    <h5>${intern.school}</h5>
    </div>`
}

module.exports = {HTMLContent, EngineerHTML, InternHTML};