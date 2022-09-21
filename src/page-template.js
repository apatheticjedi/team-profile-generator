// create team member cards with Employee information
const generateTeam = employeeInfo => {
    return `
    <section class="team-profiles row d-flex justify-content-around">
        ${employeeInfo
            .map(({ name, id, email, officeNumber, github, school }) => {
                let title = '';
                if (officeNumber) {
                    github = "";
                    school = "";
                    title = '<i class="fa-solid fa-mug-saucer"></i><br>Manager';
                    officeNumber = `<strong>Office Number:</strong> ${officeNumber}`;
                } else if (github) {
                    officeNumber = "";
                    school = "";
                    title = '<i class="fa-solid fa-laptop-code"></i><br>Engineer';
                    github = `<strong>GitHub:</strong> <a href="https://github.com/${github}">${github}</a>`;
                } else if (school) {
                    officeNumber = "";
                    github = "";
                    title = '<i class="fa-solid fa-graduation-cap"></i><br>Intern';
                    school = `<strong>School:</strong> ${school}`;
                }
                return `
                <div class="team-member card shadow text-center mt-3 mx-1 col-8 col-sm-5 col-md-4 col-lg-3 col-xl-2">
                    <div class="card-header text-white bg-primary">
                        <h2>${title}</h2>
                        <h4>${name}</h4>
                    </div>
                    <div class="card-body">
                        <p><strong>ID:</strong> ${id}</p>
                        <p><strong>Email:</strong> <a href ="mailto:${email}">${email}</a></p>
                        <p>${officeNumber}</p>
                        <p>${github}</p>
                        <p>${school}</p>
                    </div>
                </div>
                `
            }).join('')
        }
    </section>`;
}

// generate page HTML
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header class="py-4 text-white bg-danger text-center">
            <h1><i class="fa-solid fa-people-roof"></i> My Team</h1>
        </header>

        <main>

            ${generateTeam(employeeInfo)}

        </main>

        <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/8a1abe8f9f.js" crossorigin="anonymous"></script>

    </body>
    </html>
    `;
}