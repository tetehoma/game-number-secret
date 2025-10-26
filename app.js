//atribuindo uma funcao a uma variavel
let numeroSecreto = gerarNumeroAleatorio();

//O codigo acima seleciona o elemento HTML e altera o seu conteúdo
//let campo = document.querySelector(tag)
//campo.innerHTML = texto
//criando uma funcao que realize essa mesma tarefa
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

// funcao sem retorno
function verificarChute() {
    console.log(numeroSecreto);
}
//o return finaliza a execução da função e devolve um valor
function gerarNumeroAleatorio() {
   return parseInt(Math.random()* 10 + 1);
}