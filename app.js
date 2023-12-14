const inputs = document.querySelectorAll(".contact-input");
const toggleBtn = document.querySelector(".theme-toggle");
const allElements = document.querySelectorAll("*");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  allElements.forEach((el) => {
    el.classList.add("transition");
    setTimeout(() => {
      el.classList.remove("transition")
    }, 1000);
  });
});

inputs.forEach((ipt) => {
  ipt.addEventListener("focus", () =>{
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", () =>{
    if(ipt.value == ""){
      ipt.parentNode.classList.remove("not-empty")
    }
    ipt.parentNode.classList.remove("focus");
  });
});


/* For Main Website */

document.addEventListener('DOMContentLoaded', function(){

  var typed = new Typed('.multiple-text', {

    strings: ['Nurmagomedov'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});

/* For Main Website  */ 