console.log("Prompting for number which is greater than 100!!");

let number = 0;
while(number <= 100) {
let anotherNumber = prompt('Enter a Number', '0');
if (anotherNumber <= 100 || null ){
alert(`${anotherNumber} is not more than 100`);
}else {
alert('Entered number is correct!');
}
}