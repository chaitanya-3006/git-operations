let suBtn = document.getElementById("submit")
let cnum =Math.floor(Math.random()*100) +1;
let userinp = document.getElementById("inp");
let attempt = 0;
let resBtn = document.getElementById("resBtn")
let message = document.getElementById("msg")
function check(){
    let usernum = parseInt(userinp.value);
    if(cnum==usernum){
        message.innerHTML="congratulations u have guessed the number!";
        message.style.color="green";
    }
    else if(cnum<usernum) {
        message.innerHTML ="Too high! try again";
        message.style.color="red";
    }
    else{message.innerHTML="Too low! try again";
        message.style.color="green";
    }
    attempt++;
}