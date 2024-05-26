const mail = document.querySelector('#email')
const p = document.querySelector('p')
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[.@]/;

function mailCheck() {
    if (mail.value.match(letters) && mail.value.match(numbers) && mail.value.match(special)) {
        p.textContent = "Welcome on our page"
        p.style.color = "lime"
    } else if (mail.value.match(letters) && mail.value.match(numbers)) {
        p.innerText = "Remember, your e-mail should contains @ and . symbol"
        p.style.color = "tomato"
    } else {
        p.textContent = "Please enter e-mail"
        p.style.color = "tomato"
    }
} 

mail.addEventListener('keyup', mailCheck)