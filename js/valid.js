document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector('.contacts__form');
  var messageContainer = document.querySelector('.message-container');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      var firstNameInput = document.querySelector('input[name="firstName"]');
      var lastNameInput = document.querySelector('input[name="lastName"]');
      var emailInput = document.querySelector('input[name="email"]');
      var messageInput = document.querySelector('textarea[name="message"]');

      var firstName = firstNameInput.value.trim();
      var lastName = lastNameInput.value.trim();
      var email = emailInput.value.trim();
      var message = messageInput.value.trim();

      var messageElement = document.createElement('div');
      messageElement.classList.add('error-message'); 

      if (firstName === ""  || lastName === "" || email === "" || message === "") {
          messageElement.textContent = "Пожалуйста, заполните все поля.";
      } else {
          var nameRegex = /^[A-ZА-Я][a-zа-я]*$/;
          if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
              messageElement.textContent = "Имя и фамилия должны начинаться с заглавной буквы.";
          } else {
              var emailRegex = /^[a-zA-Z0-9._-]+@(mail\.ru|gmail\.com)$/;
              if (!emailRegex.test(email)) {
                  messageElement.textContent = "Пожалуйста, введите корректный email-адрес (mail.ru или gmail.com).";
              } else {
                  messageElement.textContent = "Ожидайте ответа!";
                  messageElement.classList.remove('error-message'); 
                  messageElement.classList.add('success-message'); 
              }
          }
      }

      messageContainer.appendChild(messageElement);
      messageElement.classList.add('show');

      setTimeout(function() {
          messageElement.classList.remove('show');
          setTimeout(function() {
              messageElement.remove();
          }, 1000);
      }, 2000);

      if (messageElement.classList.contains('success-message')) {
          firstNameInput.value = "";
          lastNameInput.value = "";
          emailInput.value = "";
          messageInput.value = "";
      }
  });
});