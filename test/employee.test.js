const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("New Instance", () => {
    it("Should have the properies of 'name', 'id', and 'email' with the values set to the paramters passing to the constructor.", () => {
        // Set up the data.
        const name = "Fernando";
        const empid = 2992;
        const email = "fmaldmed@gmail.com";

        // Create your case
        const fernando = new Employee(name, empid, email);

        // Make your assertion.
        expect(fernando.name).toEqual(name);
        expect(fernando.empid).toEqual(empid);
        expect(fernando.email).toEqual(email);
    });
});

// Describe getName function.
describe("getName", () => {
    it("Should return the value of the property 'name'", () => {
        //Set up your data.
        const name = "Fernando";
        const empid = 2992;
        const email = "fmaldmed@gmail.com";

        // Create your case
        const fernando = new Employee(name, empid, email);
        const result = fernando.getName();

        // Make your assertion.
        expect(result).toEqual(fernando.name);
        
    });
});

// Describe Id function.
describe("getEmpid", () => {
    it("Should return the value of the property 'empid'", () => {
        //Set up your data.
        const name = "Fernando";
        const empid = 2992;
        const email = "fmaldmed@gmail.com";

        // Create your case
        const fernando = new Employee(name, empid, email);
        const result = fernando.getEmpid();

        // Make your assertion.
        expect(result).toEqual(fernando.empid);
        
    });
});



// Describe getEmail function.
describe("getEmail", () => {
    it("Should return the value of the property 'email'", () => {
        //Set up your data.
        const name = "Fernando";
        const empid = 2992;
        const email = "fmaldmed@gmail.com";

        // Create your case
        const fernando = new Employee(name, empid, email);
        const result = fernando.getEmail();

        // Make your assertion.
        expect(result).toEqual(fernando.email);
        
    });
});

// Describe getRole function.
describe("getRole", () => {
    it("Should return the value of the property 'role'", () => {
        //Set up your data.
        const name = "Fernando";
        const empid = 2992;
        const email = "fmaldmed@gmail.com";

        // Create your case
        const fernando = new Employee(name, empid, email);
        const result = fernando.getRole();

        // Make your assertion.
        expect(result).toEqual("Employee");
        
    });
});

});
