const Employee = require('../lib/Employee');

const generateTeam = teamArr => {
    return `
    <section class="team-profiles">
    ${teamArr
        .map(({ role, name, id, email, officeNumber, github, school }) =>{
            return `
            <div class="team-member"
            <h3> class="job-title">${role}</h3>
            <h3>${name}</h3>
            <p>${id}</p>
            <p>${email}</p>
            <p>${officeNumber}</p>
            <p>${github}</p>
            <p>${school}</p>
            </div>
            </section>
            `
    }) }
    `;
}

module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF=8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    <header>
    <h1>My Team</h1>
    </header>

    <main>

    ${generateTeam()}
    </main>

    </body>
    </html>
    `;
}