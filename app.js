let numeroLimite = 10;
listaNumerosSorteados = [];
//atribuindo uma funcao a uma variavel
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
exibirMensagemInicial();
//O codigo acima seleciona o elemento HTML e altera o seu conteúdo
//let campo = document.querySelector(tag)
//campo.innerHTML = texto
//criando uma funcao que realize essa mesma tarefa
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}


// funcao sem retorno
function verificarChute() {
    tentativas++;
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('p', 'Você acertou!');
        palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativas + '!';
        exibirTextoNaTela('h1', mensagemTentativas);
        document.getElementById('reiniciar').disabled = false;
    } else {
        if (chute > numeroSecreto) {
         exibirTextoNaTela('p', 'O numero secreto é menor');   
        } else {
         exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        limparCampo();
    }
    
}
//o return finaliza a execução da função e devolve um valor
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
   if (quantidadeDeElementosNaLista == numeroLimite) {
       listaNumerosSorteados = [];
   }
   if (listaNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio();
   } else {
       listaNumerosSorteados.push(numeroEscolhido);
       console.log(listaNumerosSorteados);
       return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').disabled = true;
    limparCampo();
}