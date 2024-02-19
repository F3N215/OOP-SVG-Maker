// import inquirer, graceful and shape modules
// import { writeFile } from "graceful-fs";
import gracefulFs from "graceful-fs";
import inquirer from "inquirer";
const fs = require("fs");
const { Circle, Triangle, Square } = await import("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

// define questions array for user input via inquirer - defines shape color, text, text color & img
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
    choices: ["Circle", "Triangle", "Square"],
  },
];

// write data to file
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  gracefulFs.writeFile(fileName, data, function (err) {
    // Change this line
    if (err) {
      return console.log(err);
    }
    console.log("Wow you did it! You generated logo.svg! Looks beautiful!");
  });
}

async function init() {
  console.log("Beginning initialization");
  var svgString = "";
  var fileName = "logo.svg";

  const answers = await inquirer.prompt(questions); // prompt user for answers

  var user_text = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    user_text = answers.text;
  } else {
    console.log("Wrong text! Enter 1-3 characters, no more or less");
    return;
  }
  console.log("User input text: [" + user_text + "]");

  let user_font_color = answers["text-color"];
  console.log("User font color: [" + user_font_color + "]");

  let user_shape_color = answers.shape;
  console.log("Shape color: [" + user_shape_color + "]");

  let user_shape_type = answers["pixel-image"];
  console.log("User entered shape = [" + user_shape_type + "]");

  let user_shape;
  if (user_shape_type === "Circle" || user_shape_type === "circle") {
    user_shape = new Circle();
    console.log("You picked the Circle shape");
  } else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
    user_shape = new Triangle();
    console.log("You picked the Triangle shape");
  } else if (user_shape_type === "Square" || user_shape_type === "square") {
    user_shape = new Square();
    console.log("You picked the Square shape");
  } else {
    console.log(
      "That's not a shape! Please choose Circle, Triangle, or Square."
    );
  }
  user_shape.setColor(user_shape_color);

  // need function to add new shape and text to the shape
  var svg = new Svg();
  svg.setTextElement(user_text, user_font_color);
  svg.setShapeElement(user_shape);
  svgString = svg.render();

  console.log("Displaying shape:\n\n" + svgString);
  console.log("You made a shape!!");
  console.log("Writing to file, please hold ...");
  writeToFile(fileName, svgString);
}
init();
