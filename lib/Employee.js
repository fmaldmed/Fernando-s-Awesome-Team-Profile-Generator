class Employee {
    constructor ({name, empid, email}) {
        this.name = name;
        this.empid = empid;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmpid() {
        return this.empid;
    }
    getEmail() {
        return this.email;
    }
}

module.exports=Employee