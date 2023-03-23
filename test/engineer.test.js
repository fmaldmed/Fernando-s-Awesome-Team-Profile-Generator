const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("New Instance", () => {
    it("Should have the properies of 'name', 'id', 'email', and 'github' with the values set to the paramters passing to the constructor.", () => {
        // Set up the data.
        const name = "gabby";
        const empid = 1492;
        const email = "gabby@gabby.com";
        const github = "gabby2303";

        // Create your case
        const fernando = new Employee(name, empid, email);

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
        const name = "gabby";
        const empid = 1492;
        const email = "gabby@gabby.com";
        const github = "gabby2303";

        // Create your case
        const fernando = new Employee(name, empid, email);
        const result = gabby.getName();

        // Make your assertion.
        expect(result).toEqual(gabby.name);
        
    });
});

// Describe Id function.
describe("getEmpid", () => {
    it("Should return the value of the property 'empid'", () => {
        //Set up your data.
        const name = "gabby";
        const empid = 1492;
        const email = "gabby@gabby.com";
        const github = "gabby2303";

        // Create your case
        const fernando = new Employee(name, empid, email);
        const result = gabby.getEmail();

        // Make your assertion.
        expect(result).toEqual(gabby.id);
        
        
    });
});



// Describe getEmail function.
describe("getEmail", () => {
    it("Should return the value of the property 'email'", () => {
       //Set up your data.
       const name = "gabby";
       const empid = 1492;
       const email = "gabby@gabby.com";
       const github = "gabby2303";

       // Create your case
       const gabby = new Employee(name, empid, email);
       const result = gabby.getEmail();

       // Make your assertion.
       expect(result).toEqual(gabby.email);
        
    });
});

// Describe getEmail function.
describe("getGithub", () => {
    it("Should return the value of the property 'github'", () => {
       //Set up your data.
       const name = "gabby";
       const empid = 1492;
       const email = "gabby@gabby.com";
       const github = "gabby2303";

       // Create your case
       const gabby = new Employee(name, empid, email);
       const result = gabby.getGithub();

       // Make your assertion.
       expect(result).toEqual(gabby.github);
        
    });
});

// Describe getRole function.
describe("getRole", () => {
    it("Should return the value of the property 'Engineer'", () => {
        //Set up your data.
       const name = "gabby";
       const empid = 1492;
       const email = "gabby@gabby.com";
       const github = "gabby2303";

       // Create your case
       const gabby = new Employee(name, empid, email);
       const result = gabby.getRole();

       // Make your assertion.
       expect(result).toEqual("Engineer");
        
    });
});

});
