const h1 = document.querySelector('h1');
const formulario = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

formulario.addEventListener ('submit',suma);

function suma (event) {
    event.preventDefault();
    const a = parseInt(input1.value);
    const b = parseInt(input2.value);
    const resultado = a * b;
    pResultado.innerHTML = 'El resultado es ' +resultado;
}
