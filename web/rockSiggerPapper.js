var rock=0;
var sigger=1;
var papper=2;
function hi(){
    alert("Hello world")
}

function startgame(){
    
        askWhoIsWinner(askWhatComputerChose(),askWhatUserChose());
    
}

function askWhatComputerChose(){
    var boundery = Math.random()*3;
    var integerize = Math.floor(boundery);
    return integerize
}

function askWhatUserChose(){
    var userValue=prompt("rock sissor papper what will you choose \
    <br> between r,s,p,stop choose one");
    if (userValue != "r" && userValue != "s" && userValue != "p"&& userValue != "stop"){
        alert("error you chated"+userValue);
    }
    else if (userValue == "r"){
        userInteger = 0;
        return userInteger;
    }
    else if (userValue == "s"){
        userInteger = 1;
        return userInteger;
    }
    else if (userValue == "p"){
        userInteger = 2;
        return userInteger;
    }
    else if (userValue == "stop"){
        document.write("thank you");
    }
    
}

function askWhoIsWinner(computer,user){
    if((computer+1)%3 == user){
        alert("computer win computer is"+ computer+"user is "+user);
    }
    else{
        alert("user win computer is"+ computer+"user is "+user);
    }

}