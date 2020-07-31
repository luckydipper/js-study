var container_box = document.querySelector(".mainPage"),
    clocktablet = container_box.querySelector("div:nth-child(2) h1")


clock = new Date();

function make_Clock(){
    clock = new Date();
    let year = clock.getFullYear()
    let month = clock.getMonth();
    let date = clock.getDate();
    let day = clock.getDay();
 
    let hour =  clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();

    clocktablet.innerText =  `${year}.${month}.${date}.${day} \n  ${hour} : ${minute} : ${second < 10 ? `0${second}`: second}`

}



function main(){
    make_Clock()
    setInterval(make_Clock,1000)
}
main()