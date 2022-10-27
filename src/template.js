//makes sure variables for manager, intern, and engineer cards start out as empty
let managerCard = "";
let internCard = "";
let engineerCard = "";

//function to create manager card
//allows option for additional managers if we would like multipl managers on the team in the future
function generateManagerCard(data) {
  //for loop allows for additional managers if we would like that option later on
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === 'Manager') {
      //create newManagerCard variable that includes data from inquirer responses, will be a string 
      //that will be added to the other components in the generateTemplate function
      let newManagerCard = `<div class="card col-2 m-3 p-0" id="manager-card">
      <div class="card-header">
        <p>${data[i].name}</p>
        <p><i class="fa-solid fa-mug-hot"></i> Manager</p>
      </div>
      <div class="card-body">
        <p class="card-text" id="id">ID: ${data[i].id}</p>
        <p class="card-text" id="email">Email: <a href="mailto: ${data[i].email}"> ${data[i].email}</a></p>
        <p class="card-text" id="office-number">Office Number: ${data[i].officeNumber}</p>
      </div>
    </div>
    `
      //adds newManagerCard to managerCard variable
      //this will allow for multiple managers if we want that option in the future    
      managerCard = managerCard + newManagerCard;
    }
  }
}

//function to create intern card
//allows option for additional interns
function generateInternCard(data) {
  //for loop allows for additional interns
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === 'Intern') {
      //create newInternCard variable that includes data from inquirer responses, will be a string 
      //that will be added to the other components in the generateTemplate function
      let newInternCard = `<div class="card col-2 m-3 p-0" id="intern-card">
      <div class="card-header">
        <p>${data[i].name}</p>
        <p><i class="fa-solid fa-graduation-cap"></i> Intern</p>
      </div>
      <div class="card-body">
        <p class="card-text" id="id">ID: ${data[i].id}</p>
        <p class="card-text" id="email">Email:<a href="mailto: ${data[i].email}"> ${data[i].email}</a></p>
        <p class="card-text" id="school">School: ${data[i].school}</p>
      </div>
    </div>
    `
      //adds newInternCard to internCard variable
      //this will allow for multiple interns if we want that option in the future 
      internCard = internCard + newInternCard;
    }
  }
}

//function to create engineer card
//allows option for additional engineers
function generateEngineerCard(data) {
  //for loop allows for additional engineers
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === 'Engineer') {
      //create newEngineerCard variable that includes data from inquirer responses, will be a string 
      //that will be added to the other components in the generateTemplate function
      let newEngineerCard = `<div class="card col-2 m-3 p-0" id="engineer-card">
      <div class="card-header">
      <p>${data[i].name}</p>
      <p><i class="fa-solid fa-glasses"></i> Engineer</p>
    </div>
    <div class="card-body">
      <p class="card-text" id="id">ID: ${data[i].id}</p>
      <p class="card-text" id="email">Email:<a href="mailto: ${data[i].email}"> ${data[i].email}</a></p>
      <p class="card-text" id="github">GitHub:<a href='https://github.com/${data[i].github}'  class="website-url"> ${data[i].github}</a></p>
      <a></a>
    </div>
  </div>
  `
      //adds newEngineerCard to engineerCard variable
      //this will allow for multiple engineers
      engineerCard = engineerCard + newEngineerCard;
    }
  }
}

//template to generate the string that will go into the index.html
function generateTemplate(data) {
  //data from inquirer responses that went into the employeesArray in the index.js goes into the
  //generate cards functions
  generateManagerCard(data);
  generateInternCard(data);
  generateEngineerCard(data);

  //variable created that will be the string that is the beginning of the index.html document
  //this will not change
  const start = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/423db9ba7e.js"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>
      </head>
      <body>
        <div class="container-fluid d-flex justify-content-center header mb-3">
          <div class="row mt-4 mb-3">
            <h1>My Team</h1>
          </div>
        </div>
        <main class="row d-flex justify-content-center">`;

  //variable created that will be the string that will be the end of the index.html document
  //this will not change
  const end = `</main>
        <script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
          integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;

  //template variable that will include all of the strings, including those created in the generate
  //cards functions
  //this will create one huge string to go in the index.html
  const template = start + managerCard + engineerCard + internCard + end;

  //returns the above template variable
  return template;
}

//exports generateTemplate
module.exports = { generateTemplate };