var mins=0
var secs=0
var msecs=0
var abc;

function start(){
    abc = setInterval(function(){
        msecs++
        document.getElementById("msec").innerHTML=msecs
if(msecs==100){
secs++
document.getElementById("sec").innerHTML=secs
msecs=0  
}
else if(secs==60){
    mins++
    document.getElementById("min").innerHTML=mins
    secs=0
    
}
},10)
}

function pause(){
    clearInterval(abc)
}

function reset(){
    mins=0
    secs=0
    msecs=0
    document.getElementById("min").innerHTML=0
    document.getElementById("sec").innerHTML=0
    document.getElementById("msec").innerHTML=0

}


