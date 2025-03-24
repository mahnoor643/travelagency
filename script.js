document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("carouselTrack");
    const items = document.querySelectorAll(".carousel-item-custom");
    let index = 0;
    const totalItems = items.length;

    function moveCarousel() {
        index++;
        if (index >= totalItems) {
            index = 0;
        }
        track.style.transform = `translateX(-${index * 33.333}%)`;
    }
    setInterval(moveCarousel, 2000);
});


document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // First name validation
    const fName = document.getElementById('fName').value;
    const nameRegex = /^[a-zA-Z]{3,19}$/;
    if (!nameRegex.test(fName)) {
        isValid = false;
        document.getElementById('fnameError').classList.add('error-msg');
        document.getElementById('fnameError').style.display = 'block';
        document.getElementById('fnameError').textContent = 'Invalid Name!';
    } else {
        document.getElementById('fnameError').style.display = 'none';
    }

    // Last name validation
    const lName = document.getElementById('lName').value;
    if (!nameRegex.test(lName)) {
        isValid = false;
        document.getElementById('lnameError').classList.add('error-msg');
        document.getElementById('lnameError').style.display = 'block';
        document.getElementById('lnameError').textContent = 'Invalid Name!';
    } else {
        document.getElementById('lnameError').style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').classList.add('error-msg');
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Invalid format!';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Message validation
    const msg = document.getElementById('msg').value;
    const msgError = document.getElementById('msgError');
    msgError.textContent = '';
    if (msg.length < 15) {
        isValid = false;
        msgError.textContent = 'Please add more text';
        msgError.classList.add('error-msg');
        msgError.style.display = 'block';
    } else if (msg.length > 50) {
        isValid = false;
        msgError.textContent = 'Please reduce the text';
        msgError.classList.add('error-msg');
        msgError.style.display = 'block';
    } else {
        msgError.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('myForm').reset();
    }
});



