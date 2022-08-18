const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');

const newYears=new Date('1 Jan 2023');

function countDown(){
    const newYearDate=new Date(newYears);
    var today=new Date();

    const totalseconds=(newYearDate-today)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minutesEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);
    
}

function formatTime(time){
    return time<10?(`0${time}`):time;
}
//countDown();
setInterval(countDown,1000);