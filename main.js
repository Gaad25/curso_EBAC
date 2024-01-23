function validarNumeros() {
    var numeroA = document.getElementById('campoA').value;
    var numeroB = document.getElementById('campoB').value;

    numeroA = Number(numeroA);
    numeroB = Number(numeroB);

    var mensagem = '';

    if (numeroB > numeroA) {
        mensagem = "Número B é maior que o número A. Mensagem Positiva!";
    } else {
        mensagem = "Número B não é maior que o número A. Mensagem Negativa.";
    }

    document.getElementById('resultado').textContent = mensagem;
}
