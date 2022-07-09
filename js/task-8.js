const formSubEl = document.querySelector(".login-form");
const formInputEl = document.querySelectorAll("input");

formSubEl.addEventListener('submit', submitEl);

function submitEl(event) {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;

    const emailEl = formEl.email.value;
    const passEl = formEl.password.value;
    formInputEl.forEach(function (input) {
        if (input.value === '') {
            alert('Все поля должны быть заполнены');
        };
    });
    if (emailEl !== '' && passEl !== '') {
        formSubEl.reset();
        console.log('Email:', emailEl);
        console.log('Password:', passEl)
    };

}

