// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, employeeID, email, officeNum){
        super(name, employeeID, email)
        this.officeNum = officeNum;
        this.role = "Manager";
    }

    getOfficeNumber(){
        return this.officeNum;
    }
}

module.exports = Manager;