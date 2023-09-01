function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks')) {
    if (this.marks.length > 0) {
      let sum = 0;
      for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];        
      }
      return sum / this.marks.length;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}