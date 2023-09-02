class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else {
      if (state > 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = 'magazine';
  }  
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }  
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }  
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }  
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }  
}

class Library {
  constructor (name) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let book = {};
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

class Student {
  constructor (name) {
    this.name = name;
    this.marks = {};
  }

  addMark (mark, theme) {
    if (mark >= 2 && mark <= 5) {
      if (!this.marks.hasOwnProperty(theme)) {
        this.marks[theme] = [];
      }
      this.marks[theme].push(mark);
    }
  }

  getAverageBySubject (theme) {
    if (!this.marks.hasOwnProperty(theme)) {
      return 0;
    } 
    if (this.marks[theme].length == 0) {
      return 0;
    }
    let sum = this.marks[theme].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / this.marks[theme].length;
  }

  getAverage () {
    let sum = 0;
    let propArr = Object.keys(this.marks);
    if (propArr.length > 0) {
      for (let i = 0; i < propArr.length; i++) {
        sum = sum + this.getAverageBySubject(propArr[i]);
      } 
      sum = sum / propArr.length;
    }
    return sum;
  }
}