# jest-challenge

Video Link: https://drive.google.com/file/d/133vNDkjPLv0ss0NHPeCRZO3pVp2W2LFl/view

This challenge involved using the node inquirer package to obtain user information about a development team that would then be used to generate an HTML webpage displaying
the team and their information. I used the writeFile() method from the file system package to generate the HTML after the first inquirer (manager's information), and used
the appendFile() method from the file system package to add additional team members.

This method made the creation of the classes superfluous, since the HTML could be generated without using the classes at all - every time a team member was added another inquirer would be used to attain information about that member. The user input for this inquirer could then be used directly in the EngineerHTML/InternHTML functions (found in HTMLContent.js) to generate the HTML for the new team member(s), which would then be appended to the end of the recently created HTML.

In the actual code, I still created the classes and used them to generate the HTML rather than directly using the user input/data from inquirer (for example, I used ${manager.name} instead of ${answers.name}). To create the HTML using the classes, I also could have used each inquirer to create a new class for each new team member, pushed these classes into an array, and used a for loop to loop through the array and create a new div for each team member that was added. This would require only the writeFile() method, which would be used after all the team members data had been collected.

Still, I was able to run the tests on the four classes to determine if their properties and methods were functioning properly.

The link to the website in the respository 
