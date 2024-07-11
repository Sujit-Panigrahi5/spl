const home = document.getElementById("home");
const ratechart = document.getElementById("ratechart");
const market = document.getElementById("market");
const starline =document.getElementById("starline");
const introduction = document.getElementById("introduction");
const conant = document.getElementById("conant");
const starlinechat = document.getElementById("starlinechat");
const deposite = document.getElementById("deposite");
const marketplay = document.getElementById("marketplay");
const starlineresult = document.getElementById("starlineresult");

function homescreen(){
    introduction.style.display="block";
    introduction.style.display="flex";
    starline.style.display="block";
    starline.style.display="flex";
    conant.style.display="block";
    conant.style.display="flex";
    deposite.style.display="block";
    deposite.style.display="flex";
    marketplay.style.display="block";
    marketplay.style.display="flex";
    starlineresult.style.display="block";
    starlineresult.style.display="flex";
}

let showstarlinechat = ()=>{
    // ratechart.style.display="none";
    introduction.style.display="none";
    conant.style.display="none";
    deposite.style.display="none";
    marketplay.style.display="none";
    starlineresult.style.display="none";
}

let marketresult =()=>{
    introduction.style.display="none";
    conant.style.display="none";
    deposite.style.display="none";
    starlinechat.style.display="none";
    starlineresult.style.display="none";
}