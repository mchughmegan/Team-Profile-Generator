//require what we are testing
const Manager = require("../lib/Manager")

//testing objects specific to this class
describe("I am describing the Initialization of the Manager Class", () => {
it("When I pass the fourth parameter through the Manager class, it should relate to the office number property of the object created", () => {
    const testedElement = new Manager("Megan", 12, "email.com", 14);
    expect(testedElement.officeNumber).toBe(14)
})
})

//testing methods specific to this class
describe("I am describing the Methods of the Manager Class", () => {
    it("Should return the office number property when I invoke getOfficNumber()", () => {
        const testedElement = new Manager("Megan", 14, "email.com", 16);
        expect(testedElement.getOfficeNumber()).toBe(16)
    })
    it("Should return Manager when I invoke getRole()", () => {
        const testedElement = new Manager();
        expect(testedElement.getRole()).toBe('Manager')
    })
})