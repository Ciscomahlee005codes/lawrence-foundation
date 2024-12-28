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
  var swiper = new Swiper('.swiper', {
    loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    slidesPerView: 1,   // Number of slides to show on small screens
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
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      360: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      375: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      390: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      393: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      412: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      414: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      425: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      428: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      430: {
        slidesPerView: 1,  // Show 2 products at a time on tablets
        spaceBetween: 28,
      },
      // When the screen is >= 640px wide
      640: {
        slidesPerView: 2,  // Show 2 products at a time on tablets
        spaceBetween: 20,
      },
      768: {
      slidesPerView: 2, // Two slides per view at 768px
      spaceBetween: 28.5, // Adjust spacing for 768px to avoid overlap
    },
      800: {
      slidesPerView: 2, // Two slides per view at 800px
      spaceBetween: 28.5, // Adjust spacing for 800px to avoid overlap
    },
      820: {
      slidesPerView: 2, // Two slides per view at 820px
      spaceBetween: 28.5, // Adjust spacing for 820px to avoid overlap
    },
      834: {
      slidesPerView: 2, // Two slides per view at 834px
      spaceBetween: 28.5, // Adjust spacing for 834px to avoid overlap
    },
      853: {
      slidesPerView: 2, // Two slides per view at 853px
      spaceBetween: 28.5, // Adjust spacing for 884px to avoid overlap
    },
      884: {
      slidesPerView: 2, // Two slides per view at 884px
      spaceBetween: 28.5, // Adjust spacing for 884px to avoid overlap
    },
      912: {
      slidesPerView: 2, // Two slides per view at 912px
      spaceBetween: 28.5, // Adjust spacing for 912px to avoid overlap
    },// When the screen is >= 1024px wide
      1024: {
        slidesPerView: 3,  // Show 3 products at a time on desktops
        spaceBetween: 30,
      },
      // When the screen is >= 1280px wide
      1280: {
        slidesPerView: 3,  // Show 4 products at a time on large screens
        spaceBetween: 40,
      },
    }
  });