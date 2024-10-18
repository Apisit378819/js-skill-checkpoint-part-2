const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// const studentscore = students.filter(students => {
//   return {score : students.score < 50}
// }) 
// console.log(studentscore)

// const student = students.map(student => {
//   const addScore =  student.score * (10/100)
//   return student.score + addScore
// })
// console.log(student)

// let studentScore = student
// const tatalStudentScore = student.reduce((tatal,student) => {
//   return tatal += student
// })
// console.log(tatalStudentScore)

// console.log(`Total score is ${tatalStudentScore}`)


const studentscore = students.filter(students => students.score > 50)
.map((students) => {
  const addScore = students.score * (10/100) 
  console.log(addScore)
  return students.score + addScore
})
.reduce((totalScore,students) => {
  return totalScore += students
})
console.log(`Total score is ${studentscore}`) 