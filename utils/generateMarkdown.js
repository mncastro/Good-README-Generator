// Guide for good README file

// The application will generate a Markdown file with the following Table of Contents: 

// Title
// Description
// Author's Info (About Me/Us)
// Contributing
// Installation
// Usage
// License
// Support
// Credits and Acknowledgements
// Summary of Questions and Answers

function createREADME (data) {
    return `
    
    # ${data.title}

    ## Description

    ${data.description}
    

    ## Author's info (About Me)

    This application was created by ${data.username}
    Contact email: ${data.email}
    Github repository: ${data.repoGit}

    ## Contributing

    ${data.contributors}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.use}

    ## License 

    This application was developed under the ${data.license} license

    ## Support 

    ${data.support}

    ## Credits and acknowledgements

    ${data.credits}

    ## Summary of Questions and Answers

    ${data.questions}
    `;
};

module.exports = createREADME;


// List of data.name (see index.js)
// username-
// email-
// name-
// repoGit-
// title- 
// description- 
// installation- 
// use- 
// license- 
// support- 
// credits 
