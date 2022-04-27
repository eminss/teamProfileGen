const generateHtml = require("../util/generateHtml");

// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name){
        this.name = name;
        this.role = role;
        this.employeeID = employeeID;
        this.github = github;
        this.email = email;
        this.office = office;
    }
}

module.exports = Employee;
promptUser = () => {
    const inquirer = require("inquirer")
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What role are you in this team?',
            choices: ['Team Manager', 'Engineer', 'Intern'],
            name: 'Role'
        },
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'email'
        }
    ])
    .then((answers) => {
        console.log(answers);
    })
}

promptUser();

generateHtml();