const Employee = require ("./Employee");

class Manager extends Employee {
    constructor ({name, empid, email, office}) {
    super ({name,empid,email});
    this.office = office;
    this.role="Manager";
}
getOffice() {
    return this.office;
}
getRole() {
    return this.role;
}
}

module.exports = Manager;