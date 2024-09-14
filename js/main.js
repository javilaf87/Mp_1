const toggleButton = document.querySelector('#toggleModal');
const btnSubscribes = document.querySelector('#btnSubscribe');
const modal = document.querySelector('#modal');
const error_message = document.querySelector('.error_message');
const correo = document.querySelector('#correo');
const correoSuscrito = document.querySelector('#correoSuscrito');

btnSubscribes.addEventListener('click', manejarEnvio);
toggleButton.addEventListener('click', modalHidden);

function modalHidden() {
    // let clases = modal.classList
    // console.log(clases);
    modal.classList.toggle('hidden');
}

function manejarEnvio() {
    let correos = correo.value;
    let correo_array = correos.split('@')

    if (correos.includes('@') && correo_array.length <= 2 && correo_array[1].includes('.')) {

        modalHidden();
        // console.log(correos);
        correoSuscrito.textContent = correo.value
        correo.value = "";

    } else {
        error_message.classList.toggle('hidden');
    }

}