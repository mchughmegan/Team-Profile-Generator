const Engineer = require("../lib/Engineer")
describe("I am describing the Initialization of the Engineer Class", () => {
it("When I pass the fourth parameter through the Engineer class, it should relate to the github property of the object created", () => {
    const testedElement = new Engineer ("Megan", 12, "email.com", 'fakeuser');
    expect(testedElement.github).toBe('fakeuser')
})
})

describe("I am describing the Methods of the Engineer Class", () => {
    it("Should return the github property when I invoke getGithub()", () => {
        const testedElement = new Engineer("Megan", 14, "email.com", 'fakeuser');
        expect(testedElement.getGithub()).toBe('fakeuser')
    })
    it("Should return Engineer when I invoke getRole()", () => {
        const testedElement = new Engineer();
        expect(testedElement.getRole()).toBe('Engineer')
    })
})