
day = function(){
    today = new Date();
    test_day = new Date('2020/12/3/02:02:02');
    var gap = test_day.getTime()-today.getTime();
    
    document.write("<h1>수능까지 남은 시간 계산기!<h1>")
    document.write("수능까지 남은 날자"+(gap/1000/60/60/24)+"<br>")
    document.write("수능까지 남은 시간"+(gap/60000)+"분 남음<br>")
    document.write("수능까지 남은 시간"+(gap/1000)+"초 남음<br>")
    document.write("수능까지 남은 초"+gap +"ms 남음<br>")
    return gap;
    
}
const buton = document.getElementById("dDay");
console.dir(buton)