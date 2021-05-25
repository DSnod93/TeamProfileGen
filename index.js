// DEPENDENCIES
const inquirer = require("inquirer");
const fs = require('fs')

// EMPLOYEES
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TEAM ARRAY
const employeeTeam = []

// PROMPT FOR MANAGER
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address."
        },
        {
            type: "input",
            name: "office",
            message: "Enter the manager's office number."
        }
    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const office = data.office
            const manager = new Manager(name, id, email, office)
            employeeTeam.push(manager)
            mainMenu()
        })
};

// AFTER MANAGER COMPLETES PROMPT THEY CAN CREATE TEAM
const mainMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to add next?",
            choices: ["Engineer", "Intern", "Finish building my team"]
        }
    ])
        .then(({ options }) => {
            if (options === "Engineer") {
                createNewEngineer()

            } else if (options === "Intern") {
                createNewIntern()

            } else if (options === "Finish building my team")
                generateHtml()
        })
};

// CREATE ENGINEER FOR TEAM
const createNewEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address."
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub?"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const engineer = new Engineer(name, id, email, github)
            employeeTeam.push(engineer)
            mainMenu()
        })
};

// CREATE INTERN FOR TEAM
const createNewIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address."
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school."
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const intern = new Intern(name, id, email, school)
            employeeTeam.push(intern)
            mainMenu()
        })
};

// GENERATE HTML
function generateHtml() {
    const html =
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Team Profile</title>
    </head>
    <body>
    <header  class="bg-danger d-flex justify-content-center">
        <h1>Team Profile Generator</h1>
    </header>
    <main class="bg-danger">
        <div class="row ">
            <section class="card col bg-secondary">    
                <div class="card-text">${employeeTeam[0].name}</div>
                <div class="card-text">${employeeTeam[0].id}</div>
                <div class="card-text"><a href="mailto:${employeeTeam[0].email}">${employeeTeam[0].email}</a></div>
                <div class="card-text">${employeeTeam[0].office}</div>
            </section> 
            <section class="card col bg-secondary">    
                <div class="card-text">${employeeTeam[1].name}</div>
                <div class="card-text">${employeeTeam[1].id}</div>
                <div class="card-text"><a href="mailto:${employeeTeam[1].email}">${employeeTeam[1].email}</a></div>
                <div class="card-text"><a href="https://github.com/${employeeTeam[1].github}">GitHub</a></div>
            </section>  
            <section class="card col bg-secondary">    
                <div class="card-text">${employeeTeam[2].name}</div>
                <div class="card-text">${employeeTeam[2].id}</div>
                <div class="card-text"><a href="mailto:${employeeTeam[2].email}">${employeeTeam[2].email}</a></div>
                <div class="card-text">${employeeTeam[2].school}</div>
            </section> 
        </div>
    </main>
    <footer>
    </footer>
    </body>
    </html>
    `
    console.log(html)

    // WRITE HTML INTO INDEX.HTML
    fs.writeFile("index.html", html, function (err) {
    });
};

// START APP
managerPrompt();