let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoClicado() {
    console.log('O botão foi clicado');
};

function exibirAlerta() {
    alert ('Eu amo JS');
};


function exibirPrompt() {
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert (`Estive em ${nomeCidade} e lembrei de você!`);
};

function somaInteiros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero ;
    alert (`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}