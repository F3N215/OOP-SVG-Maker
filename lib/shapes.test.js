// import shape classes from 'shapes.js' for testing
const { Circle, Triangle, Square } = require("./shapes");

// makes circle shape
describe("Circle", () => {
  test("properly rendered", () => {
    const shape = new Circle();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="50%" fill="${this.color}">`
    );
  });
});

// makes triangle shape
describe("Triangle", () => {
  test("properly rendered", () => {
    const shape = new Triangle();
    var color = "orange";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    );
  });
});

// makes square shape
describe("Square", () => {
  test("properly rendered", () => {
    const shape = new Square();
    var color = "red";
    shape.setColor(color):
    expect(shape.render()).toEqual(
      `<rect cx="50%" cy="50%" r="50%" fill="${this.color}">`
    );
  });
});