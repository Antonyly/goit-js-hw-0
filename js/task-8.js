const formSubEl = document.querySelector(".login-form");
const formInputEl = document.querySelectorAll("input");

formSubEl.addEventListener('submit', submitEl);

function submitEl(event) {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;

    const emailEl = formEl.email.value;
    const passEl = formEl.password.value;

    formSubEl.reset();
    if (emailEl === '' || passEl === '') {
        alert('Всі поля повинні бути заповнені');
        return;
    }
    // if (emailEl !== '' && passEl !== '') {
    const form = {
        Email: emailEl,
        Password: passEl,
        // }
    }
    console.log(form)
    

    // formInputEl.forEach(function (input) {
    //     if (input.value === '') {
    //         alert('Все поля должны быть заполнены');
    //     };
    // });
    // formSubEl.forEach(function (input) {
    //     if (emailEl === '' && passEl === '') {
    //         alert('Все поля должны быть заполнены');
    // formSubEl.reset();
    //     return;
        // };
    // });

    // if (emailEl !== '' && passEl !== '') {
    //     formSubEl.reset();
    //     console.log(['Email:', emailEl]);
    //     console.log(['Password:', passEl])
    // };
}