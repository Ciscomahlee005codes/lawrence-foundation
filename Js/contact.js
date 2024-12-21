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

  // Contact Form
  document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Clear any previous error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.textContent = '');

    let isValid = true;

    // Check for empty fields
    const fName = document.getElementById("fName");
    const lName = document.getElementById("lName");
    const mailAddress = document.getElementById("mailAddress");
    const subject = document.getElementById("subject");
    const messageJs = document.getElementById("messageJs");

    if (fName.value.trim() === "") {
      isValid = false;
      // document.getElementById("fNameError").textContent = "This field is required";
      fName.style.borderColor = "red";
    } else {
      fName.style.borderColor = "";
    }

    if (lName.value.trim() === "") {
      isValid = false;
      // document.getElementById("lNameError").textContent = "This field is required";
      lName.style.borderColor = "red";
    } else {
      lName.style.borderColor = "";
    }

    if (mailAddress.value.trim() === "") {
      isValid = false;
      // document.getElementById("mailAddressError").textContent = "This field is required";
      mailAddress.style.borderColor = "red";
    } else {
      mailAddress.style.borderColor = "";
    }

    if (subject.value.trim() === "") {
      isValid = false;
      // document.getElementById("subjectError").textContent = "This field is required";
      subject.style.borderColor = "red";
    } else {
      subject.style.borderColor = "";
    }

    if (messageJs.value.trim() === "") {
      isValid = false;
      // document.getElementById("messageError").textContent = "This field is required";
      messageJs.style.borderColor = "red";
    } else {
      messageJs.style.borderColor = "";
    }

    // If all fields are valid, allow form submission
    if (isValid) {
      // For example, if form submission needs to send an email:
      window.location.href = "mailto:lamehf2020@gmail.com"; 
      alert("Form Submitted Successfully!");
    }
  });