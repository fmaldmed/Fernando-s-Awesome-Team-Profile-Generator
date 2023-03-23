const Employee = require ('./Employee');
class Intern extends Employee {
    constructor ({name, empid, email, school}) {
        super ({name,empid,email});
        this.school = school;
        this.role="Intern";
    }
    getSchool() {
        return this.school;
    }
    getRole () {
        return this.role;
    }
}

module.exports = Intern;