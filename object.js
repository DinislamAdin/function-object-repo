var student = {
    id : 44,
    name : 'din islam',
    class : 7,
    marks : 98,
}


// var idname = student.keys'id'
// var idName = student['id'];
var students = Object.keys(student);

// console.log(students);
var propartyName = 'marks';
var propartyvalue = student[propartyName];
// console.log(propartyvalue)
student.id = 54;
console.log(student)