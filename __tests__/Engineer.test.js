const Engineer = require('../lib/Engineer');

//test to create a new Engineer object
test("creates a new Engineer Object", () => {
    const engineer = new Engineer("Tom", 1, "tom@gmail.com", "izabelacloud");

    // expect(employee.name).toEqual(expect.any(String));
    // expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).toEqual(expect.stringContaining("@"));
    expect(engineer.github).toEqual(expect.any(String));
})


//test if the getRole method returns the correct role data
test("test if the getRole method returns the correct role data", () => {
    const engineer = new Engineer("Tom", 1, "tom@gmail.com", "izabelacloud");

    expect(engineer.getRole()).toEqual("Engineer");
})


//test if the getGithub method returns the correct Github username data
test("test if the getGithub method returns the correct Github username data", () => {
    const engineer = new Engineer("Tom", 1, "tom@gmail.com", "izabelacloud");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
}) 