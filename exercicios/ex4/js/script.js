// function área(quadrado) {
//     let calculo = "A área de um quadrado é: " + área;
//     return calculo;
// }

// let mensagem = área(2**2);
// alert("A área de um quadrado é: " + mensagem);

function calcularAreaQuadrado(lado) {
    let resultado = lado ** 2;
    return resultado;
}

let valor = 3;
let result = calcularAreaQuadrado(valor);
let msg = `A área do quadrado é: ${result}m²`;
alert(msg)