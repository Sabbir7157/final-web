document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("#contactForm");
  var nameInput = document.querySelector("#name");
  var emailInput = document.querySelector("#email");
  var phoneInput = document.querySelector("#phone");
  var messageInput = document.querySelector("#message");
  var contactMethodEmail = document.querySelector("#cEmail");
  var contactMethodPhone = document.querySelector("#cPhone");
  var resultDiv = document.querySelector("#show");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var messages = [];
    if (nameInput.value.trim() === "") {
      messages.push("Name is required");
    }
    if (emailInput.value.trim() === "") {
      messages.push("Email is required");
    }
    if (messageInput.value.trim() === "") {
      messages.push("Message is required");
    }
    if (contactMethodPhone.checked && phoneInput.value.trim() === "") {
      messages.push("Phone number is required if you prefer to be contacted by phone");
    }

    if (messages.length > 0) {
      resultDiv.innerText = messages.join("\n");
    } else {
      resultDiv.innerText = "Form submitted successfully!";
      if (contactMethodPhone.checked) {
        resultDiv.innerText += " We will contact you via phone.";
      } else if (contactMethodEmail.checked) {
        resultDiv.innerText += " We will contact you via email.";
      }
    }
  });
});
