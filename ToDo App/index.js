function addTask(){
    var taskName = document.querySelector('input').value;
    alert(taskName);
}

var list = document.querySelectorAll(".icon-btn");
var i=0;
while(i<list.length){
    if(i%2===0){
        list[i].addEventListener("click",handleClick);   
    }
    i++;
}

function handleClick(){
    alert("Hello");
}