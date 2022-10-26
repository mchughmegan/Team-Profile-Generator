//require what we are testing
const Intern = require("../lib/Intern")

//testing objects specific to this class
describe("I am describing the Initialization of the Intern Class", () => {
it("When I pass the fourth parameter through the Intern class, it should relate to the school property of the object created", () => {
    const testedElement = new Intern ("Megan", 12, "email.com", 'UT');
    expect(testedElement.school).toBe('UT')
})
})

//testing methods specific to this class
describe("I am describing the Methods of the Intern Class", () => {
    it("Should return the school property when I invoke getSchool()", () => {
        const testedElement = new Intern("Megan", 14, "email.com", 'UT');
        expect(testedElement.getSchool()).toBe('UT')
    })
    it("Should return Intern when I invoke getRole()", () => {
        const testedElement = new Intern();
        expect(testedElement.getRole()).toBe('Intern')
    })
})