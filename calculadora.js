function calcularNivel(vitorias, derrotas) {
    let Saldo = vitorias - derrotas;

    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { Saldo, nivel };
}

let vitorias = 30;
let derrotas = 10;

let resultado = calcularNivel(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${resultado.Saldo} está no nível de ${resultado.nivel}`);


