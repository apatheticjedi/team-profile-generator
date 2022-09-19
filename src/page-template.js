const generateTeam = employeeInfo => {
    return `
    <section class="team-profiles">
    ${employeeInfo
        .map(( {name, id, email, officeNumber, github, school}) => {
            let title = '';
            if (officeNumber){
                github = "";
                school = "";
                title = 'Manager';
            } else if (github) {
                officeNumber = "";
                school = "";
                title = 'Engineer';
            } else if (school) {
                officeNumber = "";
                github = "";
                title = 'Intern';
            }
            return `
            <div class="team-member">
            <h3 class="job-title">${title}</h3>
            <h3>${name}</h3>
            <p>${id}</p>
            <p>${email}</p>
            <p>${officeNumber}</p>
            <p>${github}</p>
            <p>${school}</p>
            </div>
            </section>
            `
    })
}
    `;
}

module.exports = templateData => {

    const employeeInfo = templateData;

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

    ${generateTeam(employeeInfo)}
    </main>

    </body>
    </html>
    `;
}