const Employee = require("../lib/Employee")
describe("I am describing the Initialization of the Employee Class", () => {
    it("Should be a typeof 'object' whenever I initialize it", () => {
        const testedElement = new Employee();
        expect(typeof(testedElement)).toBe("object")
    })
    it("When I pass the first parameter through the Employee class, it should relate to the name property of the object created", () => {
        const testedElement = new Employee("Megan");
        expect(testedElement.name).toBe("Megan")
    })
    it("When I pass the second parameter through the Employee class, it should relate to the id property of the object created", () => {
        const testedElement = new Employee("Megan", 12);
        expect(testedElement.id).toBe(12)
    })
    it("When I pass the third parameter through the Employee class, it should relate to the email property of the object created", () => {
        const testedElement = new Employee("Megan", 12, "email.com");
        expect(testedElement.email).toBe("email.com")
    })
})
describe("I am describing the Methods of the Employee Class", () => {
    it("Should return the name property when I invoke getName()", () => {
        const testedElement = new Employee("Megan");
        expect(testedElement.getName()).toBe("Megan")
    })
    it("Should return the id property when I invoke getId()", () => {
        const testedElement = new Employee("Megan", 14);
        expect(testedElement.getId()).toBe(14)
    })
    it("Should return the email property when I invoke getEmail()", () => {
        const testedElement = new Employee("Megan", 14, 'fake@email.com');
        expect(testedElement.getEmail()).toBe('fake@email.com')
    })
    it("Should return Employee when I invoke getRole()", () => {
        const testedElement = new Employee();
        expect(testedElement.getRole()).toBe('Employee')
    })
})
