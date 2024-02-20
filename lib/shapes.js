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
    return `<circle cx="50%" cy="50%" r="100%" fill="${this.color}">`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="0,200 300,200 150,0" fill="${this.color}">`;
  }
}

class Square extends Shape {
  render() {
    return `<rect cx="50%" cy="50%" r="50%" fill="${this.color}">`;
  }
}
export { Circle, Triangle, Square };
// // SVG = scalable vector graphics. you can build scalable graphics as big or as small as you want
// const d = `
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   ${mySHape.render()}

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
// </svg>
// `;

// const mySHape = new Triangle()
// myShape.setColor("blue")

// class SVG{
//   constructor(text,textCol)
// }
