// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is your project's name?",
    type: 'input',
    name: 'title'
  },
  {
    message: "What is the description of your project?",
    type: 'input',
    name: 'title'
  },
  {
    message: "Please provide a description of your project?",
    type: 'input',
    name: 'description'
  },
  {
    message: "What are the installation isntructions?",
    type: 'input',
    name: 'installation'
  },
  {
    message: "What are the usage instructions?",
    type: 'input',
    name: 'usage'
  },
  {
    message: "What kind of license should your project include?",
    type: 'list',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    message: "What contributing guidelines are included for your project?",
    type: 'input',
    name: 'contributing'
  },
  {
    message: "Please provide instructions on how to test your project.",
    type: 'input',
    name: 'testing'
  },
  {
    message: "Please provide your github username.",
    type: 'input',
    name: 'username'
  },
  {
    message: "Please provide your email.",
    type: 'input',
    name: 'email'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName),data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerAnswers) => {
    console.log('Generating Professional README...');
    writeToFile('README.md', generateMarkdown({...inquirerAnswers}));
  });

}
// Function call to initialize app
init();
