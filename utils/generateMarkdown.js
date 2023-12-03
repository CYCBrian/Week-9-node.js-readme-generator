// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[License](https://img.shields.io/badge/${license}-blue)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    The project is covered under this license:
    ${renderLicenseLink(license)}
    `;
    } else {
      return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions?](#questions?)
  * [License](#license)
   
  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributing
  ${data.Contributing}

  ## Testing
  ${data.Testing}

  ## Questions?
  [Visit my GitHub Profile here!](https://github.com/${data.GitHub})

  ## Email
  [Send me a email!](mailto:${data.Email})

  ## License
  ${renderLicenseSection(data.License)}

`;
}

module.exports = generateMarkdown;
