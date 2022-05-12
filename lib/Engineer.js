const Employee = require("./Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, employeeID, email, github){
        super(name, employeeID, email)
        this.github = github;
        this.role = "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;