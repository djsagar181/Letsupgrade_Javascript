console.log("Sagar");
const student= {
    name:"Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using JavaScript"
    }
}
console.log(student.name,student.age,student.projects.diceGame)
//using second way
const {name,age,projects} =student;
console.log(name);
console.log(age);
console.log(projects);