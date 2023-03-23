const Intern = require("../lib/Manager");

describe("Manager", () => {
    describe("New Instance", () => {
    it("Should have the properies of 'name', 'id', 'email', and 'github' with the values set to the paramters passing to the constructor.", () => {
        // Set up the data.
        const name = "Leiah";
        const empid = 0820;
        const email = "leiah@leiah.com";
        const office = "2273";

        // Create your case
        const leiah = new Employee(name, empid, email, office);

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
         // Set up the data.
         const name = "Leiah";
         const empid = 0820;
         const email = "leiah@leiah.com";
         const office = "2273";
 
         // Create your case
         const leiah = new Employee(name, empid, email, office);
         const result = leiah.getName();

        // Make your assertion.
        expect(result).toEqual(leiah.name);
        
    });
});

// Describe Id function.
describe("getEmpid", () => {
    it("Should return the value of the property 'empid'", () => {
        // Set up the data.
        const name = "Leiah";
        const empid = 0820;
        const email = "leiah@leiah.com";
        const office = "2273";

        // Create your case
        const leiah = new Employee(name, empid, email, office);
        const result = leiah.getEmpid();

        // Make your assertion.
        expect(result).toEqual(leiah.empid);
        
        
    });
});



// Describe getEmail function.
describe("getEmail", () => {
    it("Should return the value of the property 'email'", () => {
       /// Set up the data.
       const name = "Leiah";
       const empid = 0820;
       const email = "leiah@leiah.com";
       const office = "2273";

       // Create your case
       const leiah = new Employee(name, empid, email, office);
       const result = leiah.getEmail();

       // Make your assertion.
       expect(result).toEqual(leiah.email);
        
    });
});

// Describe getEmail function.
describe("getOffice", () => {
    it("Should return the value of the property 'School'", () => {
       // Set up the data.
       const name = "Leiah";
       const empid = 0820;
       const email = "leiah@leiah.com";
       const office = "2273";

       // Create your case
       const leiah = new Employee(name, empid, email, office);
       const result = leiah.getOffice();

       // Make your assertion.
       expect(result).toEqual(leiah.school);
        
    });
});

// Describe getRole function.
describe("getRole", () => {
    it("Should return the value of the property 'Intern'", () => {
        // Set up the data.
        const name = "Leiah";
        const empid = 0820;
        const email = "leiah@leiah.com";
        const office = "2273";

        // Create your case
        const leiah = new Employee(name, empid, email, office);
        const result = leiah.getRole();

       // Make your assertion.
       expect(result).toEqual("Manager");
        
    });
});

});
