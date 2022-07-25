//demo to understand
class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.cameLate = 0
        this.marks = []
    }
    isLate() {
        this.cameLate += 1
        if (this.cameLate >= 3) return "You are expelled"
        return (this.cameLate)
    }
    addMarks(marks) {
        this.marks.push(marks)
        return this.marks
    }
    avgMarks() {
        let sum = this.marks.reduce((a, b) => a + b, 0)
        this.avg = (sum / this.marks.length).toFixed(2)
        return this.avg
    }
}
let s1 = new Student("Karan", "Kumar", 29)
console.log(s1)
console.log(s1.isLate());
console.log(s1.isLate());
console.log(s1.isLate());
console.log(s1.addMarks(56))
console.log(s1.addMarks(65))
console.log(s1.avgMarks(56))