// TODO: Include packages needed for this application
//TO USE INQUIRE YOU HAVE TO IMPORTER IT.

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        //TITLE OF PROJECT
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
        //INSTALLATION INSTRUCTIONS
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },

    {
        //INSTALLATION INSTRUCTIONS
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },

    {
        //USAGE INFORMATION
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },

    {
        //CONTRIBUTION GUIDELINES
        type: 'input',
        name: 'contribution',
        message: 'Enter Contribution guidelines:',
    },

    //TEST INSTRUCTIONS
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
    },

    {
        // LICENSE
        type: 'list',
        name: 'license',
        message: 'Choose a license your application from the list options:',
        choices: ['None','Apache License 2.0', 'GNU General Public License v3.0',
            'MIT License','Mozilla Public License 2.0'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data,(error) => {
        if(error) {
            return console.log(error);
        }
        console.log('Your README file has been successfully generated!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown(answers));
 });
};

// Function call to initialize app
init();





//METHOD PROMPT ACCEPTS AN ARGUMENT (QUESTIONS)
// inquirer
//     .prompt(questions)
//     .then((response) => {
//         // console.log(response);
//     });

    // inquirer
    // .prompt(questions)
    // .then((answers) => {
    //     fs.writeFile('Gen-README.md', generateMarkdown.md(answers),(error) => {

    //     // fs.writeFile('answers.json', JSON.stringify(answers),(error) => {
    //        return error
    //        ? console.log(error)
    //        : console.log('File written successfully');
    //     });
    //    });