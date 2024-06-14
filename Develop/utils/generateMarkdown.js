// TODO: Create a function that returns a license badge based on which license is passed in
function licenseBadge(license) {
  let badge = "";
  if (license) {
    badge = `(https://img.shields.io/badge/License-${encodeURI(
      license
    )}-blue.svg)`;
  }
  return badge;
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let liBadge = "";
  if (license) {
    liBadge = `[![License: ${license}]${licenseBadge(license)}](${renderLicenseLink(license)})`;
  }
  return liBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let liLink = "";
  if (license) {
    liLink = `https://opensource.org/license/${encodeURI(license)}`;
    
    return liLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let liSection = "";
  if (license) {
    liSection = `License under the [${license}](${renderLicenseLink(
      license
    )}) license`;
  }

  return liSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let content = `
  # ${data.title}
  ${renderLicenseBadge(data.licenseBadge)}

  ## Description  
  ${data.description}

  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}
  
  ## Usage
  \'''bash
    ${data.usage}
    \'''

  ## Credits
  ${data.credits}

  ## License 
  Copyright (c) ${data.gitHubUser}. All rights reserved.
  ${renderLicenseSection(data.licenseType)}

  ## Test 
  ${data.testInstructions}

  ## Questions?
  GitHub [${data.gitHubUser}] (https://github.com/${data.gitHubUser})
  Reach out to me at - [${data.userEmail}](mailto://${data.userEmail})

  `;
  return content;
}

module.exports = generateMarkdown;
