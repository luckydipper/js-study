const toDoPart = document.querySelector(".js-toDoList"),
    toDoForm = toDoPart.querySelector(".js-toDoform"),
    toDoinput = toDoForm.querySelector("input"),
    toDoListElemnet = document.querySelector(".js-list");
let calltime = 0;


function eventcontrol(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    console.log(currentValue)
    loadToDo(currentValue)
    saveAtLocal(currentValue)
}

function saveAtLocal(data){
    calltime += 1
    localStorage.setItem(`${calltime}`,data)
}


function loadToDo(data){
    tag = document.createElement("li");
    content = document.createTextNode(`${data}`);
    tag.appendChild("content");
    toDoListElemnet.appendChild(tag)
}

function getInput(){
    addEventListener("submit",saveAtLocal) //eventlistener에는 function이름만 넣기!
    addEventListener("submit",loadToDo)   
}

function main(){
    
    getInput()
    eventcontrol()
}
main()