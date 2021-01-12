// Guide for good README file

// The application will generate a Markdown file with the following Table of Contents: 

// [Author's info] (#About us)
// [Installation](#installation)
// [Usage](#Use)
// [License](#License)
// [Contributors](#Contributing)
// [Support](#Support)
// [Credits](#Credits)
// [Questions](#questions)

function createMarkdownFile (data) {
    return;

    `
    # ${data.title}

    ## Author's info (About Me)

    'This application was created by " + ${data.username}
    'Contact email: ' + ${data.email}
    'Github repository: ' + ${data.repoGit}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.use}
    
    `;

    `
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    ${data.tableOfContents}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    ${data.questions}
    `;
        

}

// username
// email
// name
// repoGit
// title 
// description 
// installation 
// use 
// license 
// support 
// credits 
