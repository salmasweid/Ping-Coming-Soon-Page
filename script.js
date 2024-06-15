const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');

function checkEmail(e) {
    e.preventDefault();
    const email = e.target.querySelector('[type="email"]').value;

    if(validateEmail(email)) {
        form.classList.add('error');
    }
    else {
        form.classList.remove('error');
    }
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

form.addEventListener(submit, checkEmail);