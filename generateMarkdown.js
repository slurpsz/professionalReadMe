// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg"
    case "APACHE 2.0":
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    case "GPL 3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg"
    case "BSD 3":
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
    case "None":
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contributing)
  * [Tests](#tests)
  * [Demo](#demo)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation

  Run the following command to install necessary dependencies:

  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contributing}

  ## Tests
  Run these commands to start testing:

  \`\`\`
  ${data.tests}
  \`\`\`
  ## Demo

  ## License

  This project is licensed under ${data.license} license.


  ## Questions

  Please contact me on github at ${data.username} or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
