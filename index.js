// run `node index.js` in the terminal
const students = [
  { name: "John", chemistry: 80, biology: 90, dob: "01-01-2000" },
  { name: "Jane", chemistry: 85, biology: 80, dob: "02-02-2000" },
  { name: "Alice", chemistry: 90, biology: 70, dob: "03-03-2000" },
  { name: "Bob", chemistry: 75, biology: 85, dob: "04-04-2000" },
  { name: "Charlie", chemistry: 80, biology: 90, dob: "05-05-2000" }
];

function compareStudents(a, b) {
  // First priority: Total marks
  const totalMarksA = a.chemistry + a.biology;
  const totalMarksB = b.chemistry + b.biology;
  if (totalMarksA !== totalMarksB) {
    return totalMarksB - totalMarksA; // Sort in descending order
  }

  // Second priority: Biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology; // Sort in descending order
  }

  // Third priority: Date of birth (in ascending order)
  const dobA = new Date(a.dob);
  const dobB = new Date(b.dob);
  if (dobA.getTime() !== dobB.getTime()) {
    return dobA.getTime() - dobB.getTime();
  }

  // Default: no change in order
  return 0;
}

students.sort(compareStudents);
console.log(students);