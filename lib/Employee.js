const generateHtml = require("../util/generateHtml");

// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, employeeID, email){
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
}

module.exports = Employee;