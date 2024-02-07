const inquirer = require("inquirer");
const filesystem = require("./node_modules/graceful-fs/graceful-fs");
const fs = require("fs");

// questions array for user input - defines shape color, text, text color & img
const questions = [
  {
    type: "confirm",
    name: "confirm",
    message: "Ready to make some shapes?",
  },
  {
    type: "input",
    name: "text",
    message: "Text: Enter up to (3) Characters:",
  },
  {
    type: "input",
    name: "text-color",
    message: "Text Color: Enter a color keyword, or use a HEX code:",
  },
  {
    type: "input",
    name: "shape",
    message: "Shape Color: Enter a color keyword, or use a HEX code:",
  },
  {
    type: "list",
    name: "pixel-image",
    message: "Choose which pixel image you would like?",
    choices: ["Circle", "Square", "Triangle"],
  },
];

// write data to file
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  filesystem.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Wow you did it! You generated logo.svg! Looks beautiful!");
  });
}

init();
