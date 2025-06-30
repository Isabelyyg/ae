alert("Bem-vindo ao jogo da média!");

// Pergunta quantos números o usuário quer digitar
let quantidade = parseInt(prompt("Quantos números você quer digitar?"));

if (!Number.isInteger(quantidade) || quantidade <= 0) {
  alert("Por favor, digite um número inteiro positivo.");
} else {
  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));

    if (isNaN(numero)) {
      alert("Número inválido. Será considerado 0.");
      numero = 0;
    }

    soma += numero;
  }

  let media = soma / quantidade;

  alert(`A média dos ${quantidade} números digitados é: ${media.toFixed(2)}`);
}
