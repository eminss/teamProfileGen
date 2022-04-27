const Employee = require("./Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, employeeID, email, office){
        super(name, employeeID, email, office)
        // parameters will be given from inquirer prompt
        // this.name = name;
        // this.employeeID = employeeID
        // this.email = email;
    }
}