function generateManagerCard {

}

function generateInternCard {

}



function generateTemplate(data) {
    `<!DOCTYPE html>
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
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Team Profile</title>
      </head>
      <body>
        <div class="container-fluid d-flex justify-content-center header mb-3">
          <div class="row mt-4 mb-3">
            <h1>My Team</h1>
          </div>
        </div>
        <main class="row d-flex justify-content-center">
          <div class="card col-2 m-3" id="manager-card">
            <div class="card-header">
              <p>Brad</p>
              <p><i class="fa-solid fa-mug-hot"></i> Manager</p>
            </div>
            <div class="card-body">
              <p class="card-text" id="id">ID:</p>
              <p class="card-text" id="email">Email:</p>
              <p class="card-text" id="office-number">Office Number:</p>
            </div>
          </div>
          <div class="card col-2 m-3" id="engineer-card">
            <div class="card-header container-fluid">
              <p>Megan</p>
              <p><i class="fa-solid fa-glasses"></i> Engineer</p>
            </div>
            <div class="card-body">
              <p class="card-text" id="id">ID:</p>
              <p class="card-text" id="email">Email:</p>
              <p class="card-text" id="github">Github:<a href="https://github.com/mchughmegan" class="website-url"> username</a></p>
              <a></a>
            </div>
          </div>
          <div class="card col-2 m-3" id="intern-card">
            <div class="card-header">
              <p>Phil</p>
              <p><i class="fa-solid fa-graduation-cap"></i> Intern</p>
            </div>
            <div class="card-body">
              <p class="card-text" id="id">ID:</p>
              <p class="card-text" id="email">Email:<a href="mailto: fake@email.com"> fake@email.com</a></p>
              <p class="card-text" id="school">School:</p>
            </div>
          </div>
        </main>
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
};


module.exports = template;