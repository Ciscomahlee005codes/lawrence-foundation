// // Vaidation
// function validateForm() {
//    // Prevent form submission
//    event.preventDefault();
   
//    // Clear previous errors
//    const errorElements = document.querySelectorAll('.error-message');
//    errorElements.forEach(element => element.textContent = '');
   
//    let isValid = true;

//    // Get input values
//    const name = document.getElementById("name");
//    const lastName = document.getElementById("lastName");
//    const email = document.getElementById("email");
//    const phone = document.getElementById("phone");
//    const donation = document.getElementById("donation");
//    const amount = document.getElementById("amount");
//    const terms = document.getElementById("terms");

//    // Validate fields
//    if (name.value.trim() === "") {
//        isValid = false;
//        document.getElementById("nameError").textContent = "This field is required";
//        name.style.borderColor = "red";
//    } else {
//        name.style.borderColor = "";
//    }

//    if (lastName.value.trim() === "") {
//        isValid = false;
//        document.getElementById("lastNameError").textContent = "This field is required";
//        lastName.style.borderColor = "red";
//    } else {
//        lastName.style.borderColor = "";
//    }

//    if (email.value.trim() === "") {
//        isValid = false;
//        document.getElementById("emailError").textContent = "This field is required";
//        email.style.borderColor = "red";
//    } else {
//        email.style.borderColor = "";
//    }

//    if (phone.value.trim() === "") {
//        isValid = false;
//        document.getElementById("phoneError").textContent = "This field is required";
//        phone.style.borderColor = "red";
//    } else {
//        phone.style.borderColor = "";
//    }

//    if (donation.value === "") {
//        isValid = false;
//        document.getElementById("donationError").textContent = "Please select a donation type";
//        donation.style.borderColor = "red";
//    } else {
//        donation.style.borderColor = "";
//    }

//    if (amount.value.trim() === "") {
//        isValid = false;
//        document.getElementById("amountError").textContent = "This field is required";
//        amount.style.borderColor = "red";
//    } else {
//        amount.style.borderColor = "";
//    }

//    if (!terms.checked) {
//        isValid = false;
//        alert("You must agree to the terms and conditions.");
//    }

//    // If all fields are valid, allow form submission
//    if (isValid) {
//     // For example, if form submission needs to send an email:
//     window.location.href = "mailto:lamehf2020@gmail.com"; 
//     alert("Form Submitted Successfully!");
//   }
// }
