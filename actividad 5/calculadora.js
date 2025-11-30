function sumar(){
    const num1 = parseFloat(document.getElementById('calculo').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 + num2;
    document.getElementById('resultado').innerText = 'resultado:' + resultado;

}

function restar(){
    const num1 = parseFloat(document.getElementById('calculo').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 - num2;
    document.getElementById('resultado').innerText = 'resultado:' + resultado;

}

function multiplicar(){
    const num1 = parseFloat(document.getElementById('calculo').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = 'resultado:' + resultado;

}

function division(){
    const num1 = parseFloat(document.getElementById('calculo').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 / num2;
    document.getElementById('resultado').innerText = 'resultado:' + resultado;

}

function limpiar() {
    document.getElementById('calculo');
    document.getElementById('numero2');
    document.getElementById('resultado').innerText= 'resultado:';
}