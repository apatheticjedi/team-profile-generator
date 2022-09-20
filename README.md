
<div id="top"></div>

![badge](https://img.shields.io/badge/license-MIT-brightgreen)

# [Team Profile Generator](https://github.com/apatheticjedi/team-profile-generator)

### Table of Contents

1. [Description](#description)
2. [Built With](#built-with)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

This is an application that uses Node.js to generate a team profile HTML page with information about each team member including: Job Title, Name, ID number, email address, and role-specific information. The user is prompted to enter the appropriate information when the application is initialized then a styled HTML page is generated in the /dist directory.

### Built With


* JavaScript
* HTML
* CSS
* Bootstrap
* Node.js 

## Installation

This application uses Inquirer to prompt questions and Jest to run tests. Clone the repo, then run 
```
npm i inquirer@8.2.4
```
 and 
 ```
 npm i jest
 ```
 on the command line in the root directory.

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

To use, type 
```
node index
```
in the command line, then answer the questions as prompted. Once the Manager's information is entered, then again after each Employee's information is entered, the user is prompted to create another employee or finish to create the HTML file. The generated file and stylesheet are then created in the /dist directory

## Contributing

Contact me for further information about how to contribute to this project

<p align="right">(<a href="#top">back to top</a>)</p>


## Tests

To run tests for Employee, Manager, Engineer, and Intern objects, type 
```
npm run test
``` 
in the command line. The tests are located in the __tests__/  directory


## Questions

Reach out to me with questions at:

[GitHub](https://github.com/apatheticjedi)


## License

[MIT License](https://spdx.org/licenses/MIT.html)


<p align="right">(<a href="#top">back to top</a>)</p>
