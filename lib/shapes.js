class Shape {
  // define class using constructor to initialize/set 'color' value
  constructor(color) {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

// shape class extender functions to render circle, triangle and square shapes
class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="50%" fill="${this.color}">`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon cx="50%" cy="50%" r="50%" fill="${this.color}">`;
  }
}

class Square extends Shape {
  render() {
    return `<rect cx="50%" cy="50%" r="50%" fill="${this.color}">`;
  }
}

module.exports = { Circle, Triangle, Square };
