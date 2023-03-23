const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("New Instance", () => {
    it("Should have the properies of 'name', 'id', 'email', and 'github' with the values set to the paramters passing to the constructor.", () => {
        // Set up the data.
        const name = "Valen";
        const empid = 0516;
        const email = "valen@valen.com";
        const School = "UCSD";

        // Create your case
        const valen = new Employee(name, empid, email);

        // Make your assertion.
        expect(gabby.name).toEqual(name);
        expect(gabby.empid).toEqual(empid);
        expect(gabby.email).toEqual(email);
        expect(gabby.email).toEqual(github);
    });
});

// Describe getName function.
describe("getName", () => {
    it("Should return the value of the property 'name'", () => {
        //Set up your data.
        const name = "Valen";
        const empid = 0516;
        const email = "valen@valen.com";
        const School = "UCSD";

        // Create your case
        const valen = new Employee(name, empid, email);
        const result = valen.getName();

        // Make your assertion.
        expect(result).toEqual(valen.name);
        
    });
});

// Describe Id function.
describe("getEmpid", () => {
    it("Should return the value of the property 'empid'", () => {
        //Set up your data.
        const name = "Valen";
        const empid = 0516;
        const email = "valen@valen.com";
        const School = "UCSD";

        // Create your case
        const valen = new Employee(name, empid, email);
        const result = valen.getEmail();

        // Make your assertion.
        expect(result).toEqual(valen.empid);
        
        
    });
});



// Describe getEmail function.
describe("getEmail", () => {
    it("Should return the value of the property 'email'", () => {
       //Set up your data.
       const name = "Valen";
        const empid = 0516;
        const email = "valen@valen.com";
        const School = "UCSD";

       // Create your case
       const valen = new Employee(name, empid, email);
       const result = valen.getEmail();

       // Make your assertion.
       expect(result).toEqual(valen.email);
        
    });
});

// Describe getEmail function.
describe("getSchool", () => {
    it("Should return the value of the property 'School'", () => {
       //Set up your data.
       const name = "Valen";
        const empid = 0516;
        const email = "valen@valen.com";
        const School = "UCSD";

       // Create your case
       const valen = new Employee(name, empid, email);
       const result = valen.getGithub();

       // Make your assertion.
       expect(result).toEqual(valen.school);
        
    });
});

// Describe getRole function.
describe("getRole", () => {
    it("Should return the value of the property 'Intern'", () => {
        //Set up your data.
        const name = "Valen";
        const empid = 0516;
        const email = "valen@valen.com";
        const School = "UCSD";

       // Create your case
       const valen = new Employee(name, empid, email);
       const result = valen.getRole();

       // Make your assertion.
       expect(result).toEqual("Intern");
        
    });
});

});
