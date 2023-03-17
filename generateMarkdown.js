// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return ""
  }
}


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
  ${data.testing}
  \`\`\`
  ## Demo

  ## License

  This project is licensed under ${renderLicenseBadge(data.license)} license.


  ## Questions
  Please contact me through github or email down below:

  github: ${data.github}
  email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
