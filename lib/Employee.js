const generateHtml = require("../util/generateHtml");

// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, employeeID, email){
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.role = "Employee";
    }

    getName(){
        return this.name;
    }

    getId() {
        return this.employeeID;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}



module.exports = Employee;