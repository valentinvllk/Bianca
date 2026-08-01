const text = `Bianca,

Știu că uneori cuvintele nu pot repara ceea ce s-a întâmplat.

Totuși, am vrut să îți las acest mic loc în care să îți spun,

Îmi pare sincer rău.

Regret fiecare clipă în care te-am dezamăgit.

Dacă ai putea să privești dincolo de greșelile mele, ai vedea un om care încă ține enorm la tine.

❤️`;

const typing = document.getElementById("typing");

let index = 0;

function type(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(type,45);

    }

}

type();

document
.getElementById("showBtn")
.addEventListener("click",()=>{

document.getElementById("hiddenMessage").style.display="block";

document.getElementById("showBtn").style.display="none";

});

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.opacity=Math.random();

document.getElementById("petals").appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,300);

const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

let stars=[];

for(let i=0;i<150;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

a:Math.random(),

d:Math.random()*0.02

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(s=>{

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,"+s.a+")";

ctx.fill();

s.a+=s.d;

if(s.a>=1 || s.a<=0){

s.d*=-1;

}

});

requestAnimationFrame(animate);

}

animate();
const envelope=document.getElementById("envelope");

envelope.addEventListener("click",()=>{

envelope.classList.toggle("open");

});
