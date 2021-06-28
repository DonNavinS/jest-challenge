
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
  


<div class='main-container'>
        <div class='header'>
             <h1>${manager.name}'s Team</h1>
        </div>
    <div class="member-container">
        <div class = 'member manager'>
        <h2>Manager</h2>
        <h3>${manager.name}</h3>
        <h4>ID #: ${manager.id}</h4>
        <h4>Email: <a href="mailto:${manager.email}">${manager.email}</a></h4>
        <h4>${manager.officeNumber}</h4>
        </div>
  
        
        `

        

}


const EngineerHTML = function(engineer){
    return `
    <div class = 'member engineer'>
    <h2>Engineer</h2>
    <h3>${engineer.name}</h3>
    <h4>ID #: ${engineer.id}</h4>
    <h4>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h4>
    <h4><a href="${engineer.github}" target="_blank">Github</a></h4>
    </div>`
}


const InternHTML = function(intern){
    return `
    <div class = 'member intern'>
    <h2>Intern</h2>
    <h3>${intern.name}</h3>
    <h4>ID #: ${intern.id}</h4>
    <h4>Email: <a href="mailto:${intern.email}">${intern.email}</a></h4>
    <h4>${intern.school}</h4>
    </div>`
}

module.exports = {HTMLContent, EngineerHTML, InternHTML};