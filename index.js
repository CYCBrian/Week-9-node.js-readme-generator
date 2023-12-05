// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require ("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"Title",
        message:"Enter a title for your project."
    },
    {
        type:"input",
        name:"Description",
        message:"Enter a brief description for your project."
    },
    {
        type:"input",
        name:"Installation",
        message:"Enter installation instructions for your project."
    },
    {
        type:"input",
        name:"Usage",
        message:"Enter usage information for your project."
    },
    {
        type:"input",
        name:"Contributing",
        message:"Enter contribution guidelines for your project."
    },
    {
        type:"input",
        name:"Testing",
        message:"Enter test instructions for your project."
    },
    {
        type:"list",
        name:"License",
        message:"Select the License for your project.",
        choices: ["Apache-2.0", "GPL-3.0", "MIT", "BSD-2-Clause", "BSD-3-Clauses", "BSL-1.0", "CC0-1.0", "EPL-2.0", "AGPL-3.0", "GPL-2.0", "LGPL-2.1", "MPL-2.0", "Unlicense", "None"]
    },
    {
        type:"input",
        name:"GitHub",
        message:"Enter your GitHub username."
    },
    {
        type:"input",
        name:"Email",
        message:"Enter your email address."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully generated ${fileName}`);
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
