const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateTeam = require("./util/generateHtml");

let team = [];

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
            team.push(manager);
            console.log(team);
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
                // finish adding team members then
                // generate html page with team members
                const fillPageContent = generateTeam(team);
                fs.writeFile(`generatedTeamProfile.html`, fillPageContent, (err) => {

                    err? console.log(err) : console.log("Generating Team Profile...")
                })
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
        ]).then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            addTeamMembers();
        })
};

addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internName',
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
        ]).then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            team.push(intern);
            console.log(team);
            addTeamMembers();
        })
};

createManager();