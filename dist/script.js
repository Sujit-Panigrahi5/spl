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
const ratechart1 = document.getElementById("ratechart1");
const ratechart0 = document.getElementById("ratechart0");

const parhome= document.getElementById("parhome");
const homesm = document.getElementById("homesm");

const market0 = document.getElementById("market0");
const market1= document.getElementById("market1");


// setTimeout(()=>{
//     document.getElementById("start1").style.display='none';

//     document.getElementById("navbar").style.display='blcok';
//     document.getElementById("navbar").style.display='block';
//     document.getElementById("options").style.display='block';
//     document.getElementById("introduction").style.display='block';
//     document.getElementById("conant").style.display='block';
//     document.getElementById('starlinechat').style.display='block';
//     document.getElementById('deposite').style.display='block';
//     document.getElementById('marketplay').style.display='block';
//     document.getElementById('starlineresult').style.display='block';
//     document.getElementById('footer').style.display='block';


    

// },400)

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

let showhome1 = ()=>{
    parhome.style.backgroundColor="#CBD5E1";
    parhome.style.borderColor="#2563EB";
    homesm.style.backgroundColor="#334155";
    homesm.style.color="#FFFFFF";
    homesm.style.scale=1.2;
    homesm.style.fontSize='15px'
    homesm.style.borderColor ='#FFFFFF'
}
let donshow = ()=>{
    homesm.style.backgroundColor="#CBD5E1";
    homesm.style.borderColor="#2563EB";
    homesm.style.scale=1;
    homesm.style.fontSize='14px';
    parhome.style.backgroundColor="#334155";
    parhome.style.borderColor ='#FFFFFF'
    homesm.style.color="#000000"
}


let showratechar = ()=>{
    ratechart0.style.backgroundColor="#CBD5E1";
    ratechart0.style.borderColor="#2563EB";
    ratechart1.style.backgroundColor="#334155";
    ratechart1.style.color="#FFFFFF";
    ratechart1.style.scale=1.2;
    ratechart1.style.fontSize='15px'
    ratechart1.style.borderColor ='#FFFFFF'
    console.log("sujit Panigrahi")
}
let donshow2 = ()=>{
    ratechart1.style.backgroundColor="#CBD5E1";
    ratechart1.style.borderColor="#2563EB";
    ratechart1.style.scale=1;
    ratechart1.style.fontSize='14px';
    ratechart0.style.backgroundColor="#334155";
    ratechart0.style.borderColor ='#FFFFFF'
    ratechart1.style.color='black'
}

let showmarket = ()=>{
    market0.style.backgroundColor="#CBD5E1";
    market0.style.borderColor="#2563EB";
    market1.style.backgroundColor="#334155";
    market1.style.color="#FFFFFF";
    market1.style.scale=1.2;
    market1.style.fontSize='15px'
    market1.style.borderColor ='#FFFFFF'
}

let donshow3 = ()=>{
    market1.style.backgroundColor="#CBD5E1";
    market1.style.borderColor="#2563EB";
    market1.style.scale=1;
    market1.style.fontSize='14px';
    market0.style.backgroundColor="#334155";
    market0.style.borderColor ='#FFFFFF'
    market1.style.color='black'
}

let showstarline = ()=>{
    starline0.style.backgroundColor="#CBD5E1";
    starline0.style.borderColor="#2563EB";
    starline1.style.backgroundColor="#334155";
    starline1.style.color="#FFFFFF";
    starline1.style.scale=1.2;
    starline1.style.fontSize='15px'
    starline1.style.borderColor ='#FFFFFF'
}

let donshow4 = ()=>{
    starline1.style.backgroundColor="#CBD5E1";
    starline1.style.borderColor="#2563EB";
    starline1.style.scale=1;
    starline1.style.fontSize='14px';
    starline0.style.backgroundColor="#334155";
    starline0.style.borderColor ='#FFFFFF'
    starline1.style.color='black'
}

let showpotions = ()=>{
    document.getElementById("options").style.display='block'
    console.log("sujit panigrahi");
    document.getElementById("options").style.display='flex';
    document.getElementById("option1").style.display='block';
    document.getElementById("option").style.display='none';
}

let lesspotions=()=>{
    document.getElementById("options").style.display='none';
    document.getElementById('option').style.display='block';
    document.getElementById("option1").style.display='none';
}


