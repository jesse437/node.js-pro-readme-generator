// TODO: Include packages needed for this application
// installed: npm install inquirer

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const { error } = require("console");
const licenseBadge = require("license badge");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description:",
  },
  {
    type: "input",
    name: "table of contents",
    message: "Enter table of contents",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install this project",
  },
  {
    type: "input",
    name: "Usage",
    message: "How to use",
  },
  {
    type: "input",
    name: "Credits",
    message: "Who was involved in the making of this project?",
  },
  {
    type: "list",
    name: "LicenseBadge",
    message: "Choose the license badge for the application",
    choices: ["MIT", "APache 2.0", "MPL 2.0"]
  },

  {
    type: "input",
    name: "HowToContribute",
    message: "Enter contributions you would like to make",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Enter test instructions",
  },
  {
    type: "input",
    name: "githubUser",
    message: "What is your GitHub username?" 
  },
  {
    type: "input",
    name: "userEmail",
      validate: function (email) {
            // Regex mail check (return true if valid mail)
            const isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            return isValid ? true : "Enter a valid email address";
        }
    }

  
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Success!");
    }
  });

  return writeToFile;
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const filename = "README.md";
      writeToFile(`./output/${filename}`, answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment");
      } else {
        console.error("Something else went wrong");
      }
    });
}

// Function call to initialize app
init();
