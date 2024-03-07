// import shape classes from 'shapes.js' for testing
const { Circle, Triangle, Square } = require("./shapes");

// makes circle shape
describe("Circle", () => {
  test("properly rendered", () => {
    const shape = new Circle();
    const color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" fill="${color}"/>`
    );
  });
});

// makes triangle shape
describe("Triangle", () => {
  test("properly rendered", () => {
    const shape = new Triangle();
    const color = "orange";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon points="0,200 300,200 150,0" fill="${color}"/>`
    );
  });
});

// makes square shape
describe("Square", () => {
  test("properly rendered", () => {
    const shape = new Square();
    const color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect cx="50%" cy="50%" r="50%" fill="${color}"/>`
    );
  });
});
