const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const team = require("./util/generateHtml");

team();
console.log(team);
promptUser = () => {
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
};

let teamMembers = [];

createManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'What is your manager employeeID?',
                name: 'managerId'
            },
            {
                type: 'input',
                message: 'What is your manager email?',
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: 'What is your manager office number?',
                name: 'managerOfficeNum'
            }
        ]).then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            teamMembers.push(manager);
            addTeamMembers();
        })
};

addTeamMembers = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What kind of team member would you like to add?',
                choices: ['Add an engineer', 'Add an intern', 'Finish the team'],
                name: 'addTeamMember'
            }
        ])
        .then((answers) => {
            if (answers.addTeamMember == 'Add an engineer') {
                addEngineer();
            } else if (answers.addTeamMember == 'Add an intern') {
                addIntern();
            } else {

            }
        })
};

addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'engineerName',
                validate: ','
            },
            {
                type: 'input',
                message: "What is the engineer's employeeID?",
                name: 'engineerId'
            },
            {
                type: 'input',
                message: "What is the engineer's email?",
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: "What is your engineer's github?",
                name: 'engineerGithub'
            }
        ])
};

addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internName',
                validate: ','
            },
            {
                type: 'input',
                message: "What is the intern's employeeID?",
                name: 'internId'
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'internEmail'
            },
            {
                type: 'input',
                message: "What is your intern's school?",
                name: 'internSchool'
            }
        ])
};

createManager();