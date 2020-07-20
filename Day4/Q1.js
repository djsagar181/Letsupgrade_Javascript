console.log("sagar");
//create a for loop to count from 0 to 100
for (let num = 0; num <= 100; num++){
    /**this will print FizzBuzz if no is divisible by 3 and 5**/
     if ((num % 3 == 0) && (num % 5 == 0)){
       console.log ("fizzbuzz" + " " + num); 
//otherwise, if the number is divisible by 5 print buzz
     } else if (num % 5 == 0) {
      console.log("buzz" + " " + num);
//Also, if the number is divisible by 3 print fizz
     } else if (num % 3 == 0){
       console.log("fizz" + " " + num);
     } else {
//it will prints those no which does not satisfy above condition
       console.log (num);
     }
  }