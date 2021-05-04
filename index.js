
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const fs = require("fs");

let teamArr = [];

function startPrompt() {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter manager's name"

        },
        {
            name: "id",
            message: "Enter manager's ID"
        },
        {
            name: "email",
            message: "Enter manager's email address"
        },

        {
            name: "officeNumber",
            type: "number",
            message: "Enter manager's office number"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            teamArr.push(teamMember)
            createTeamMembers();
        });

}

function createTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamData",
            message: "Add more team members?",
            choices: ['Engineer', 'Intern', 'DONE']
        }
    ])

        .then(function (data) {

            switch (data.teamData) {
                case "Engineer":
                    createEngineer();
                    break;

                case "Intern":
                    createIntern();
                    break;
                case "DONE":
                    generateHTML();
                    break;
            }
        });
}

function createEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter engineer's name" 
        },
        {
            name: "id",
            message: "Enter engineer's ID"
        },
        {
            name: "email",
            message: "Enter engineer's email address"
        },
        {
            name: "github",
            message: "Enter engineer's Github profile"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            teamArr.push(teamMember)
            createTeamMembers()
        });

}

function createIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter intern's name"

        },
        {
            name: "id",
            message: "Enter intern's ID"
        },
        {
            name: "email",
            message: "Enter intern's email address"

        },
        {
            name: "school",
            message: "Enter intern's school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            teamArr.push(teamMember)
            createTeamMembers()
        });

};

function generateHTML() {
    console.log('You have entered the following:');
    console.log(teamArr);
    console.log('DONE!');
    console.log('Please check the dist folder for the HTML file.');
    let mainHTML = []
    let htmlForm = 
`
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <title>My Team</title>
        </head>
        <body>
            <nav class="black">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">My Team</a>
                </div>
            </nav>
            <div class="container">
`
    mainHTML.push(htmlForm);

    for (let i = 0; i < teamArr.length; i++) {
        let object = 
`
                <div class="row">
                    <div class="col s6 m6 l6 m6">
                        <div class="card grey darken-1 z-depth-3">
                            <div class="card-content white-text">
                                <span>${teamArr[i].name}</span>
                                <p>${teamArr[i].title}</p>
                            </div>
                            <div class="card-action">
                                <p class="white-text">ID: ${teamArr[i].id}</p>
                                <p class="white-text">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
`
        if (teamArr[i].officeNumber) {
            object += 
`
                                <p class="white-text">Office Number: ${teamArr[i].officeNumber}</p>
`
        }
        if (teamArr[i].github) {
            object += 
`
                                <p class="white-text">GitHub: <a href="https://github.com/${teamArr[i].github}">${teamArr[i].github}</a></p>
`
        }
        if (teamArr[i].school) {
            object += 
`
                                <p class="white-text">School: ${teamArr[i].school}</p>
`
        }
        object += 
`
                            </div>
                        </div>
                    </div>
                
            
`
        mainHTML.push(object)
    }

    let closeHTML = 
`               </div>
            </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
`
    mainHTML.push(closeHTML);

    fs.writeFile(`./dist/teamGen.html`, mainHTML.join(""), function (error) {
        
    })
}

startPrompt();