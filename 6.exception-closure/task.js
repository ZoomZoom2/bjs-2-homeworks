function parseCount (value) {
  if (Number.isNaN(Number.parseFloat(value))) {
    throw new Error('Невалидное значение');
  }
  return Number.parseFloat(value);
}

function validateCount (value) {
  try {
    return parseCount(value);
  } catch (e) {
    return e;
  }
}

class Triangle {
  constructor (a, b, c) {
    if ((a + b < c) || (a + c < b) || (b + c < a)) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter () {
    return this.a + this.b + this.c;
  }

  get area () {
    let square = (this.a + this.b - this.c) * (this.a - this.b + this.c) * (-this.a + this.b + this.c) * (this.a + this.b + this.c);
    square = Number((Math.sqrt(square) / 4).toFixed(3));
    return square;
  }
}

function getTriangle (a, b, c) {
  let tri = {};
  try {
    tri = new Triangle(a, b, c);
  } catch (e) {
    tri = {
      get perimeter () {
        return 'Ошибка! Треугольник не существует';
      },
    
      get area () {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
  return tri;
}