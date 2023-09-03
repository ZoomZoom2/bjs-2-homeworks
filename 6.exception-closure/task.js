function parseCount (value) {
  let res = Number.parseFloat(value);
  if (Number.isNaN(res)) {
    throw new Error('Невалидное значение');
  }
  return res;
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
    let prm = this.perimeter;
    return Number((Math.sqrt((prm - 2 * this.a) * (prm - 2 * this.b) * (prm - 2 * this.c) * prm) / 4).toFixed(3));
  }
}

function getTriangle (a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      get perimeter () {
        return 'Ошибка! Треугольник не существует';
      },
    
      get area () {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}