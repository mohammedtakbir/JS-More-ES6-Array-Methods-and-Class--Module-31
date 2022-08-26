const student = {
    name: 'roton ali',
    age: 15,
    class: 'nine',
    marks: {
        math: 87,
        physics: 78,
        chemistry: 65
    }
}
// ? dot(.) notation
const marks = student.marks;
const math = marks.math;
// console.log(marks, math)
// ? [] bracket notation
const chemistry = student['marks']['chemistry'];
// console.log(chemistry)

// ? 
const subject = 'physics';
const physics = student.marks[subject];
console.log(physics);