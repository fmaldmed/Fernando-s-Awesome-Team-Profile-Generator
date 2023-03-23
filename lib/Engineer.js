const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor ({name, empid, email, github}) {
        super ({name,empid,email});
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;