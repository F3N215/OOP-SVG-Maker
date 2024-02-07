// import shape classes from 'shapes.js' for testing
const { Circle, Triangle, Square } = require("./shapes");

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
