const menu = document.querySelector('.menu-bar');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
[openMenuBtn, closeMenuBtn].forEach((btn)=>{
   btn.addEventListener('click',() =>{
      menu.classList.toggle('open');
      menu.style.transition = "transform 0.5s ease"
   });
});
menu.addEventListener("transitionend", function (){
    this.removeAttribute("style");
});

menu.querySelectorAll('#dropdown > i').forEach((arrow)=>{
  arrow.addEventListener("click", function () {
   this.closest("#dropdown").classList.toggle("active");
  })
})
// Scroll Button
  let calcScrollValue = () =>{
   let scrollProgress = document.getElementById('progress');
   let progressValue = document.getElementById('progress-value');
   let pos = document.documentElement.scrollTop;
   let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   let scrollValue = Math.round((pos * 100)/ calcHeight);
   if (pos > 100) {
       scrollProgress.style.display = "grid";
   }
   else{
       scrollProgress.style.display = "none";
   }
   scrollProgress.addEventListener("click", () => {
       document.documentElement.scrollTop = 0;
   });
   scrollProgress.style.background = `conic-gradient(##008d8c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
};

window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

 