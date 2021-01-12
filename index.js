// Variables with required libraries used in the application

const inquirer = require("inquirer");
const fs = require("fs");

// Variable to generate README markdownn file
var createREADME = require("./utils/generateMarkdown.js")

// Creates variable with array of questions for user
const questions = [
    {
        type: "input",
        message: "Please type your username?",
        name: "username"
    }, 
    {
        type: "input",
        message: "Type your email",
        name: "email"
    }, 
    {
        type: "input",
        message: "Type your name/nickname",
        name: "name"
    }, 
    {
        type: "input",
        message: "Type a name for your Github repository (ex. https://github.com/reponame",
        default: "https://github.com/",
        name: "repoGit"
    }, 
    {
        type: "input",
        message: "Choose a descriptive title/name for your project",
        name: "title"
    }, 
    {
        type: "input",
        message: "Provide a short description of your project",
        name: "description"
    }, 
    {
        type: "input",
        message: "Does your project needs a particular npm library or instalation? (Leave blank if not applicable.)",
        name: "installation",
        default: "This repository does not require installation."
    }, 
    {
        type: "input",
        message: "What is this repository for?",
        name: "use"
    }, 
    {
        type: "list",
        name: "license",
        message: "Select a type of license for your project",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    }, 
    {
        type: "input",
        message: "Can other users constribute?",
        name: "contributors",
        default: "This repository does not need contributions."
    }, 
    {
        type: "input",
        message: "Who can users contact for support? (Add email or Github account)",
        name: "support",
        default: "This repository does not offer user support."
    }, 
    {
        type: "input",
        message: "Anyone you want to aknowledge or credit? (Leave blank if you're the only author)",
        name: "credits",
        default: "This repository is an original project by the author." 
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            return console.log(err);
            
        }
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers =>{
        writeToFile("./newREADME.md", createREADME(answers));
    });
};

// function call to initialize program
init();
