const inquirer = require("inquirer");
const fs = require("fs");

// questions array for user input
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
