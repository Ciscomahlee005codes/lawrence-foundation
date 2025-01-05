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
// Vaidation
function validateForm() {
  // Prevent form submission
  event.preventDefault();
  
  // Clear previous errors
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => element.textContent = '');
  
  let isValid = true;

  // Get input values
  const name = document.getElementById("name");
  const middleName = document.getElementById("middleName");
  const lastName = document.getElementById("lastName");
  const dateOfBirth = document.getElementById("dob");
  const residential = document.getElementById("resAddress");
  const national = document.getElementById("nation");
  const stateOfOrigin = document.getElementById("state");
  const lga = document.getElementById("localGovernment");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const donation = document.getElementById("donation");
  const amount = document.getElementById("amount");
  const terms = document.getElementById("terms");

  // Validate fields
  if (name.value.trim() === "") {
      isValid = false;
      document.getElementById("nameError").textContent = "This field is required";
      name.style.borderColor = "red";
  } else {
      name.style.borderColor = "";
  }

  if (middleName.value.trim() === "") {
    isValid = false;
    document.getElementById("middleNameError").textContent = "This field is required";
    middleName.style.borderColor = "red";
} else {
    middleName.style.borderColor = "";
}

  if (lastName.value.trim() === "") {
      isValid = false;
      document.getElementById("lastNameError").textContent = "This field is required";
      lastName.style.borderColor = "red";
  } else {
      lastName.style.borderColor = "";
  }

  if (dateOfBirth.value.trim() === "") {
    isValid = false;
    document.getElementById("dateOfBirthError").textContent = "This field is required";
    dateOfBirth.style.borderColor = "red";
} else {
    dateOfBirth.style.borderColor = "";
}

if (residential.value.trim() === "") {
  isValid = false;
  document.getElementById("resAddressError").textContent = "This field is required";
  residential.style.borderColor = "red";
} else {
  residential.style.borderColor = "";
}

if (national.value.trim() === "") {
  isValid = false;
  document.getElementById("nationError").textContent = "This field is required";
  national.style.borderColor = "red";
} else {
  national.style.borderColor = "";
}

if (stateOfOrigin.value.trim() === "") {
  isValid = false;
  document.getElementById("stateError").textContent = "This field is required";
  stateOfOrigin.style.borderColor = "red";
} else {
  stateOfOrigin.style.borderColor = "";
}

if (lga.value.trim() === "") {
  isValid = false;
  document.getElementById("localGovernmentError").textContent = "This field is required";
  lga.style.borderColor = "red";
} else {
  lga.style.borderColor = "";
}

  if (email.value.trim() === "") {
      isValid = false;
      document.getElementById("emailError").textContent = "This field is required";
      email.style.borderColor = "red";
  } else {
      email.style.borderColor = "";
  }

  if (phone.value.trim() === "") {
      isValid = false;
      document.getElementById("phoneError").textContent = "This field is required";
      phone.style.borderColor = "red";
  } else {
      phone.style.borderColor = "";
  }

  if (donation.value === "") {
      isValid = false;
      document.getElementById("donationError").textContent = "Please select a donation type";
      donation.style.borderColor = "red";
  } else {
      donation.style.borderColor = "";
  }

  if (amount.value.trim() === "") {
      isValid = false;
      document.getElementById("amountError").textContent = "This field is required";
      amount.style.borderColor = "red";
  } else {
      amount.style.borderColor = "";
  }

  if (!terms.checked) {
      isValid = false;
      alert("You must agree to the terms and conditions.");
  }

  // If all fields are valid, allow form submission
  if (isValid) {
   // For example, if form submission needs to send an email:
   window.location.href = "mailto:lamehf2020@gmail.com"; 
   alert("Form Submitted Successfully!");
 }
}