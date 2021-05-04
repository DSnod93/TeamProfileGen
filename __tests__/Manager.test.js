const Manager = require('../lib/Manager');


//test to create a new Manager object
test("creates a new Manager Object", () => {
    const manager = new Manager("Tom", 1, "tom@gmail.com", 650-339-5086);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})


//test if the getRole method returns the correct role data
test("test if the getRole method returns the correct role data", () => {
    const manager = new Manager("Tom", 1, "tom@gmail.com", 650-339-5086);

    expect(manager.getRole()).toEqual("Manager");
}) 