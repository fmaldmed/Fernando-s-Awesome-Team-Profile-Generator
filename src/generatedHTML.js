// These functions will be rendering the team cards.
// Manager
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-4>
        <div class = "card h-100">
            <div class="card-header text-center">
                <h3>${manager.name}<h3>
                <h4>Manager</h4>
                
                <div class="card-body">
                <p class ="id">ID: ${manager.empid}</p>
                <p class ="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class ="officeNumber">Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

//Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class="card-header text-center">
                <h3> ${engineer.name}</h3>
                <h4>Engineer</h4>
             </div>
    
            <div class="card-body">
                <p class ="id">ID: ${engineer.empid}</p>
                <p class ="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class ="gitHub">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Intern
const generateIntern = function (intern) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class="card-header text-center">
                <h3> ${intern.name}</h3>
                <h4>Intern</h4>
             </div>
    
            <div class="card-body">
                <p class ="id">ID: ${intern.empid}</p>
                <p class ="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class ="school">Education: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

