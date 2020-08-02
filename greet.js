let greetPage = document.querySelector("#js-personal"),
    statement = greetPage.querySelector("h4"),
    form = greetPage.querySelector("form"),
    input = form.querySelector("input");

function explicitForm(){form.classList.remove("notShowing")};

function hideForm(){form.classList.add("notShowing")};

function greetName(name){
    hideForm();
    statement.innerText = `Hello~~~ ${name}`};

function AskName(){
    statement.innerText = `hi~ please give me a name`};

function setName(name){
    localStorage.setItem("username",name)
};
function importName(){
    let username = input.value
    return username
}
function eventprevent(event){ //submit했을 때, 이벤트를 막고 저장하고, checklocal이를 부름.
    event.preventDefault();
    setName(importName());
    checkLocalstorage()
}

function checkLocalstorage(){ // 지정된  txt를 보여줘야 하나 말아야 하나 숨겨야 하나 말아야 하나.
    AskName();
    let exist = localStorage.getItem("username");
    if (exist === null || exist === ""){
        explicitForm();
        input.value = null
    } else {
        greetName(exist);
    }
}
function main(){
    form.addEventListener("submit",eventprevent)
    checkLocalstorage()
}

main()
//만약 username의 localstage에 해당하는 값이 있으면 보이는 입력하세요 없어지고, from나타남
//만약 username의 localstage에 해당하는 값이 없으면 form이 없어지고, 입력하세요 생김*/

// 함수를 너무 자잘하게 나눠도 문제인 것 같다. 한줄로 잘리는 것은 그냥 코드 치는 것이 좋겠다.