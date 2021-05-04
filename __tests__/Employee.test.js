const Employee = require('../lib/Employee');


//test to create a new Employee object
test("creates a new Employee Object", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
})


//test if the getName method returns string data
test("test if the getName method returns string data", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})


//test if the getId method returns id data
test("test if the getId method returns id data", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
})


//test if the getEmail method returns email data
test("test if the getEmail method returns email data", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})