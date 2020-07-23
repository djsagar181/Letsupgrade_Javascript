

function printTable(){
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++){
     var Tag= document.getElementById('Print');
     Tag.innerHTML += (num*i) + "<br/>" 
    }
   }

   