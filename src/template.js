function generateTemplate(data) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Profile</title>
    </head>
    <body>
    <div class="container-fluid d-flex justify-content-center header">
        <div class="row">
            <h1>Team Profile</h1>
        </div>
    </div>
    <div class="container-fluid d-flex justify-content-center">
        <div class="row mb-2" id="employees">

        </div>
    </div>
    </body>
    </html>`;
};


module.exports = template;