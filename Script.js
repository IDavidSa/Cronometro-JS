"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron


function inicio(){
    cron = setInterval(() => {temporizador()}, tempo);
}


function pausa(){
    clearInterval(cron);

}

function pare(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("contador").innerText = "00:00:00"

}

function temporizador(){
    ss++
    if(ss==60){
        ss=0;
        mm++;
    }
    
    if (mm==60){
        mm=0
        hh++
    }


    var n = (hh < 10? '0' + hh : hh) + ":" + (mm < 10 ? '0' + mm : mm) + ":" +(ss < 10 ? '0' + ss : ss);
    document.getElementById("contador").innerText = n;
}