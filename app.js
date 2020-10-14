let handSec     =   document.querySelector('.hand.sec');   
let handMin     =   document.querySelector('.hand.min');
let handHour    =   document.querySelector('.hand.hour');
let hands       =   document.querySelector('.hand');



function setDate(){

    let date        =   new Date();
    let seconds     =   date.getSeconds();
    let minutes     =   date.getMinutes();
    let hours       =   date.getHours();

    seconds         =   ((seconds/60)*360)+270; 
    minutes         =   ((minutes/60)*360)+270;
    hours           =   ((hours/12)*360)+270;

    handSec.style.transform     =   `rotate(${seconds}deg)`;
    handMin.style.transform     =   `rotate(${minutes}deg)`;
    handHour.style.transform    =   `rotate(${hours}deg)`;
    hands.style.transition      =   'all 0.07s';
}

setInterval(setDate, 1000);
