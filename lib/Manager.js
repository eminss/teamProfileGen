// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, employeeID, email, officeNum){
        super(name, employeeID, email)
        // parameters will be given from inquirer prompt
        this.officeNum = officeNum;

    }
}

module.exports = Manager;