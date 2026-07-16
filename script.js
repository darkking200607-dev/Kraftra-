// Welcome Message
console.log("Welcome to Kraftra 🚀");

// Smooth Button Animation
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform = "scale(1.08)";

});

button.addEventListener("mouseleave", () => {

button.style.transform = "scale(1)";

});

});

// Fade In Sections

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.2)";

}else{

header.style.boxShadow="none";

}

});
