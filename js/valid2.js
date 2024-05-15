document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.search-tour__submit');
    const messageContainer = document.querySelector('.message-container');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        messageContainer.innerHTML = '';
        
        const fromInput = document.querySelector('.search-tour__input:nth-of-type(1) input');
        const toInput = document.querySelector('.search-tour__input:nth-of-type(2) input');
        const peopleInput = document.querySelector('.search-tour__input:nth-of-type(3) input');
        const dateInput = document.querySelector('.search-tour__input:nth-of-type(4) input');
        
        if (!isNotEmpty(fromInput) || !isNotEmpty(toInput) || !isNotEmpty(peopleInput) || !isNotEmpty(dateInput)) {
            showMessage('Заполните все поля', 'error');
            return;
        }
        
        if (!isValidInput(fromInput, /^[А-Яа-яЁёA-Za-z]+$/)) {
            showMessage('Введите только буквы для поля "Откуда"', 'error');
            return;
        }
        
        if (!isValidInput(toInput, /^[А-Яа-яЁёA-Za-z]+$/)) {
            showMessage('Введите только буквы для поля "Куда"', 'error');
            return;
        }
        
        if (!isValidInput(peopleInput, /^\d+$/)) {
            showMessage('Введите только цифры для поля "Количество человек"', 'error');
            return;
        }
        
        showMessage('Ваша заявка принята', 'success');
        
        fromInput.value = '';
        toInput.value = '';
        peopleInput.value = '';
        dateInput.value = '';
    });
    
    function isValidInput(input, pattern) {
        const value = input.value.trim();
        return pattern.test(value);
    }
    
    function isNotEmpty(input) {
        const value = input.value.trim();
        return value !== '';
    }
    
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        
        if (type === 'success') {
            messageDiv.classList.add('success-message');
        } else {
            messageDiv.classList.add('error-message');
        }
        
        messageContainer.appendChild(messageDiv);
        
        messageDiv.classList.add('show');
        
        setTimeout(function() {
            messageDiv.remove();
        }, 2000);
    }
});


