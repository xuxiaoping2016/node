const { PI } = Math;

module.exports.area = (r) => PI * r ** 2;

module.exports.circumference = (r) => 2 * PI * r;

module.exports.Square = class Square {
    constructor(width) {
      this.width = width;
    }
  
    area() {
      return this.width ** 2;
    }
  };