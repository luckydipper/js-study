const mainbord = document.querySelector(".mainPage"),
    form = mainbord.querySelector("div:nth-child(1) form"),
    input = form.querySelector("input"),
    txt = document.querySelector(".notShowing"),
    greet = document.querySelector(".notShowing"),
    iluust = document.querySelector("#illust");
    
const USER_LS = "currentUser";

function painGreet(text){
    iluust.innerText =`hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        
    } else {
        painGreet(currentUser)
        greet.className = "showing";
        txt.className = "notShowing";
    }
}

function main(){
    loadName()
}
main()