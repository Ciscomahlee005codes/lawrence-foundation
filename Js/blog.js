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

 // Scroll Reveal Section
 ScrollReveal({
  reset: true,
  distance:'60px',
  duration:2500,
  delay:200
 });
     ScrollReveal().reveal('#card-1, #card-3, .team-card-2, #test-box-1, .blog-card-content', { delay: 50, origin: 'top' });
     ScrollReveal().reveal('#box-1, .donate-text-content, .about-img, #count-2, .customer-1, .customer-4, .copyright', { delay: 50, origin: 'left' });
     ScrollReveal().reveal('.programmer, #box-2, #img-donate, #count-4', { delay: 50, origin: 'right' });
     ScrollReveal().reveal('.intro-text-1, #card-2, #test-box-2, #card-4', { delay: 50, origin: 'bottom' });
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