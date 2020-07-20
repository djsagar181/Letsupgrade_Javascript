function ask(question,yes,no){
    if(confirm(question))yes()
    else no();
}

ask(
    "Do you agree?",
    () => {alert("You agreed.");},//replaced function keyword and added arrow function
    () => {alert("You cancled the exceution");}//replaced function keyword and added arrow function
)