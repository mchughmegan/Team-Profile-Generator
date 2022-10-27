# Team-Profile-Generator
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

## Description

This project uses node.js to create a Team Profile in html. Inquirer prompts the user with questions, and the responses are placed in the applicable places in the html with the help of fs. Additionally, jest was helpful in running tests for this application.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

In VS Code, enter the following in the Integrated Terminal to install the applicable versions of jest and inquirer:

```
npm i inquirer@8.2.4
```

```
npm i jest
```

## Usage

To view a video walkthrough of the application, click on this link https://drive.google.com/file/d/16lDJizdv51nnjtdr2eP0US9IMDx-VJ7c/view.

In VS Code, the user will need to open their integrated terminal by right clicking on the index.js file. 

![Open Terminal](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/Open%20Integrated%20Terminal.png)

In the terminal, they will need to type node index.js then enter. 

![Type in Terminal](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/node%20index.js.png)

The user will then be prompted with questions regarding each employee on their team.

![Inquirer Questions](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/Inquirer%20questions%20and%20responses.png)

The user will be able to add new team members.

![Add employee](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/Next%20Employee.png)

Once the user indicates that there are no more employees to add, the terminal will explain that there is a new html document.

![Choose None](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/No%20more%20employees.png)

![New html](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/html%20created.png)

The user can now locate their index.html for their Team Profile in the dist folder. When the user right clicks on the newly generated index.html, they will be able to preview it in their web browser by choosing Open in Default Browser.

![Open in Browser](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/View%20in%20default%20browser.png)

When the user sees the newly generated index.html in the web browser, they will see a page with My Team at the top, and cards with team members and their applicable information in the main section.

![View in Browser](https://github.com/mchughmegan/Team-Profile-Generator/blob/main/assets/html%20in%20browser.png)

## Credits

Color Palette can be found here:
https://palettes.shecodes.io/palettes/1246

Thank you to Mark Gardner for suggesting to add multiple strings of html in the template.js. His GitHub site can be found here:
https://github.com/MarkGATX

## Tests

To run tests, run the following command in the Integrated Terminal:

```
npm run test
```

## License
    
    This project is licensed under the MIT License. To learn more about this license, go to:
https://opensource.org/licenses/MIT 

## Questions

If you have any questions, please contact me at megan.mchugh@gmail.com.
For more of my work, please refer to my GitHub page:
[mchughmegan](https://github.com/mchughmegan/)
