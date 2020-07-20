console.log("Calculator using Javascript");
var num1=Number(prompt("Enter a First number."));
var num2=Number(prompt("Enter a second no."));
var choice=prompt("Which operation do you want to perform :'addition', 'subtraction','multiply','division','squareroot',mo,'percentage'");
var result;

switch (choice) {
    case "addition":
        result =num1 + num2;
        break;

    case "subtraction":
        result=num1 - num2;
        break;

    case "multiply":
        result =num1 * num2;
        break;

    case "division":
        result =num1 / num2;

    case "squareroot":
        result=Math.sqrt(num1);

    case "percentage":
        result=num1 % num2;

    default:
        console.log("Enter correct choice");
        break;
}

console.log(`The result of ${choice} is ${result}`);
