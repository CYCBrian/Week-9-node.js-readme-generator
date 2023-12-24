// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== "None") {
    return `<img src="https://img.shields.io/badge/${License}-blue.svg" alt="License Badge">`;
  } else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== "None") {
    const lowercaseLicense = License.toLowerCase();
    return `(https://choosealicense.com/licenses/${lowercaseLicense})`;
  } else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== 'None') {
    return `## License\n\nThe project is covered under this license:
    [${License}]${renderLicenseLink(License)}\n`;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ${renderLicenseBadge(data.License)}

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

  ${renderLicenseSection(data.License)}

`;
}

module.exports = generateMarkdown;
