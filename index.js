// const words = ["Coder", "Node Backend Developer", "Full Stack Web Developer"];
// let i = 0;
// let timer;

// function typingEffect() {
//   let word = words[i].split("");
//   var loopTyping = function () {
//     if (word.length > 0) {
//       document.getElementById("word").innerHTML += word.shift();
//     } else {
//       deletingEffect();
//       return false;
//     }
//     timer = setTimeout(loopTyping, 200);
//   };
//   loopTyping();
// }

// function deletingEffect() {
//   let word = words[i].split("");
//   var loopDeleting = function () {
//     if (word.length > 0) {
//       word.pop();
//       document.getElementById("word").innerHTML = word.join("");
//     } else {
//       if (words.length > i + 1) {
//         i++;
//       } else {
//         i = 0;
//       }
//       typingEffect();
//       return false;
//     }
//     timer = setTimeout(loopDeleting, 50);
//   };
//   loopDeleting();
// }

// typingEffect();

function myTheme(){
    const toggle= document.getElementById("darkmode-Toggle")
    const body= document.getElementById("main")
    const second_row= document.getElementById("second_row")
    console.log("hi")
    if (toggle.checked == true){
        console.log("hi")
        body.style.background = "#4D4D4D";
        second_row.style.background = "#4D4D4D";
      }else{
        body.style.background = "white";
        second_row.style.background = "#F9F9F9";

      }
}

var typed = new Typed(".auto-type", {
  strings: ["Full Stack Web Developer", "Node.js Backend Developer"],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
});


GitHubCalendar(".calendar", "aditikulkarni1697", { responsive: true });


// Toggle the visibility of the menu on hamburger click

let navMenu = document.getElementById("nav-menu2");
document.getElementById("hamburger-menu").addEventListener("click", function() {

  if (navMenu.style.display === "none" || navMenu.style.display === "") {
      navMenu.style.display = "block"
  } else {
      navMenu.style.display = "none";
  }
});



function hideNavbar(){
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth >= 800) {
      navMenu.style.display = "none";
  }
}
function onWindowResize() {
      window.addEventListener("resize", function() {
          hideNavbar();
      });
  }
  
onWindowResize();

const nav = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
