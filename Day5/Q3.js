console.log("Fetch API");
function fetchTodo(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(Response=>{console.log(Response);
    return Response.json()}).then(data=>{
        console.log(data);
        for(let i=0;i<data.length;i++)
        {
            if(data[i].completed==true){
                console.log(data[i]);
            }
        }
    })
    .catch(error=>console.log(error));
}
fetchTodo();