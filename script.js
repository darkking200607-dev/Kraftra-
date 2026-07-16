// =========================
// KRAFTRA v2.0
// =========================

// Navbar Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 20){

header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

}

});


// Fade Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});


// Button Hover Animation

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// Counter Animation

const counters = document.querySelectorAll(".stat h2");

let started = false;

window.addEventListener("scroll",()=>{

const stats = document.querySelector(".stats");

if(!stats) return;

const top = stats.offsetTop - 350;

if(window.scrollY > top && !started){

started = true;

counters[0].innerHTML="10K+";
counters[1].innerHTML="5K+";
counters[2].innerHTML="50K+";
counters[3].innerHTML="4.9★";

}

});


// Logo Click

const logo = document.querySelector(".logo");

if(logo){

logo.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


// Welcome

console.log("🚀 Welcome to Kraftra v2.0");
