// ===============================
// Portfolio JavaScript
// ===============================

// Typing Animation
const text = [
  "Aspiring Software Developer",
  "Frontend Web Developer",
  "Python Learner",
  "Digital Marketing Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".hero-text h2").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }

})();


// Scroll to Top Button

const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.id = "topBtn";

document.body.appendChild(btn);

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

btn.style.display = "block";

}else{

btn.style.display = "none";

}

};

btn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Reveal Animation

const revealElements=document.querySelectorAll("section");

window.addEventListener("scroll",reveal);

function reveal(){

for(let i=0;i<revealElements.length;i++){

let windowHeight=window.innerHeight;

let revealTop=revealElements[i].getBoundingClientRect().top;

let revealPoint=120;

if(revealTop<windowHeight-revealPoint){

revealElements[i].classList.add("show");

}

}

}

reveal();

console.log("Portfolio Loaded Successfully");
