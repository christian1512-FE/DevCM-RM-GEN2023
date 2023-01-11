// TODO: Include packages needed for this application
//TO USE INQUIRE YOU HAVE TO IMPORTER IT.

const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        //TITLE OF PROJECT
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:'
    },

    {
        //INSTALLATION INSTRUCTIONS
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },

    {
        //USAGE INFORMATION
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },

    {
        //CONTRIBUTION GUIDELINES
        type: 'input',
        name: 'contribution',
        message: 'Enter Contribution guidelines:'
    },

        //TEST INSTRUCTIONS
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:'
    },

    {
        // LICENSE
        type: 'input',
        name: 'license',
        message: 'Choose a license your application from the list options:',
        //ADD THE LIST
    },

    {
        //GITHUB USERNAME
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
    },

    {
        //EMAIL
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }

];


//METHOD PROMPT ACCEPTS AN ARGUMENT (QUESTIONS)
inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init(questions);


//TO USE INQUIRE YOU HAVE TO IMPORTER IT.
// const inquirer = require('inquirer');