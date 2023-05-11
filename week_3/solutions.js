console.log("----------------------------------")
console.log(" ***** salary calculations ****** ")
console.log("----------------------------------")

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

const salary = prompt("Please enter your salary: ")
const lowestSalary= 5500
const increasedSalary= salary<=lowestSalary? salary*1.5 : salary*1.1

console.log("Salary:", salary, "Increased Salary:", Math.trunc(increasedSalary))




