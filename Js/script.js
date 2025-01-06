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

  //  Intro Section Carosuel
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide .text-container-1, .carousel-slide .text-container-2, .carousel-slide .text-container-3, .carousel-slide .text-container-4');
  const totalSlides = slides.length;
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  
  // Function to change slide
  function changeSlide() {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
  }
  
  // Go to the next slide
  nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    changeSlide();
  });
  
  // Go to the previous slide
  prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    changeSlide();
  });
  
  // Optional: Automatically transition every 5 seconds
  setInterval(function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    changeSlide();
  }, 5000); // 5000 ms = 5 seconds
  
   // Scroll Reveal Section
   ScrollReveal({
    reset: true,
    distance:'60px',
    duration:2500,
    delay:200
   });
       ScrollReveal().reveal('.about-head, #activity-1, #activity-3', { delay: 50, origin: 'top' });
       ScrollReveal().reveal('.journals,  #count-1, #count-2, .customer-1, .customer-4, .copyright', { delay: 50, origin: 'left' });
       ScrollReveal().reveal('.programmer, .impact-container-img, #count-3, #count-4', { delay: 50, origin: 'right' });
       ScrollReveal().reveal('.abt-link-container, #activity-2, #activity-4', { delay: 50, origin: 'bottom' });

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

     // Count Section
     let displayValue = document.querySelectorAll(".count-num");
     let intervalTime = 2000;

     displayValue.forEach((displayValue) => {
       let valueStart = 0;
       let valueEnd = parseInt(displayValue.getAttribute("data-val"));
       let timeDuration = Math.floor(intervalTime / valueEnd);
       let counting = setInterval(function () {
         valueStart += 1;
         displayValue.textContent = valueStart;
         if (valueStart == valueEnd) {
           clearInterval(counting);
         }
       }, timeDuration);
     }); 
  // Swiper Slider
  // const swiper = new Swiper('.swiper', {
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     834: {
  //     slidesPerView: 2, // Two slides per view at 834px
  //     spaceBetween: 28.5, 
  //   },
  //   853: {
  //     slidesPerView: 2, // Two slides per view at 834px
  //     spaceBetween: 28.5,
  //   },
  //   912:{
  //     slidesPerView: 3, // Three slides per view at 1440px
  //     spaceBetween: 50,
  //   }
  //   }
  // });
 
  // Initialize the first Swiper (Previous Event Section)
var swiper1 = new Swiper('.swiper1', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,   // Show one slide at a time by default
  spaceBetween: 10,   // Space between slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,  // Show 1 slide on small screens
      spaceBetween: 28,
    },
    640: {
      slidesPerView: 2,  // Show 2 slides at a time on medium screens
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,  // Show 3 slides at a time on large screens
      spaceBetween: 30,
    },
  }
});

// Initialize the second Swiper (Culture Section)
var swiper2 = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,   // Show one slide at a time by default
  spaceBetween: 10,   // Space between slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,  // Show 1 slide on small screens
      spaceBetween: 28,
    },
    640: {
      slidesPerView: 2,  // Show 2 slides at a time on medium screens
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,  // Show 3 slides at a time on large screens
      spaceBetween: 30,
    },
  }
});


