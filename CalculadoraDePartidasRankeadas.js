function analisar(numVitoriais, numDerrotas){
    let saldo = numVitoriais - numDerrotas
    let nivel = ""

    if (saldo < 10) {
        console.log("Ferro")
    } else if (saldo >= 11 && saldo <= 20) {
        console.log("Bronze")
    } else if (saldo >= 21 && saldo <= 50) {
        console.log("Prata")
    } else if (saldo >= 51 && saldo <= 80) {
        console.log("Ouro")
    } else if (saldo >= 81 && saldo <= 90) {
        console.log("Diamante")
    } else if (saldo >= 91 && saldo <= 100) {
        console.log("Lendário")
    } else if (saldo >= 101) {
        console.log("Imortal")
    }
}
analisar(35, 5)
ls
console.log("O Herói tem de saldo de " analisar + " e está no nível de " + nivel)

function analisar(numVitorias, numDerrotas) {
    let saldo = numVitorias - numDerrotas;
    let nivel = "";

    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo >= 101) {
        nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}

analisar(150, 30);  // Exibe: O Herói tem de saldo de 30 e está no nível de Prata