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
        <h3>${answers.ManagerName}</h3>
        <h5>ID #: ${answers.ManagerID}</h5>
        <h5>Email: <a href="mailto:${answers.ManagerEmail}">${answers.ManagerEmail}</a></h5>
        <h5><a href="${answers.ManagerGithub}">Github</a></h5>
        </div>
        
        <div>This is div 2</div>

        <div>This is the last div</div>
    </div>
        
    </body>
    </html>
  
    
    
   
    
    
    
    `
}


module.exports = HTMLContent;