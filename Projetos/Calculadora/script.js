let totalEmExecucao = 0;
let visorBuffer = "0";
let operadorAnterior = null;

const tela = document.querySelector(".tela");

function cliqueBotao(valor){
    if(isNaN(valor)){
        tratarSimbolo(valor);
    }else{
        tratarNumero(valor);
    }

    atualizarTela();
}

function tratarSimbolo(simbolo){
    switch(simbolo){

        case "C":
            visorBuffer = "0";
            totalEmExecucao = 0;
            operadorAnterior = null;
            break;

        case "=":
            if(operadorAnterior === null){
                return;
            }
            executarOperacao(parseInt(visorBuffer));
            operadorAnterior = null;
            visorBuffer = totalEmExecucao.toString();
            totalEmExecucao = 0;
            break;

        case "←":
            if(visorBuffer.length === 1){
                visorBuffer = "0";
            }else{
                visorBuffer = visorBuffer.slice(0, -1);
            }
            break;

        case "+":
        case "−":
        case "×":
        case "÷":
            tratarOperacaoMatematica(simbolo);
            break;
    }
}

function tratarOperacaoMatematica(simbolo){

    if(visorBuffer === "0"){
        return;
    }

    const numeroBuffer = parseInt(visorBuffer);

    if(totalEmExecucao === 0){
        totalEmExecucao = numeroBuffer;
    }else{
        executarOperacao(numeroBuffer);
    }

    operadorAnterior = simbolo;
    visorBuffer = "0";
}

function executarOperacao(numero){

    if(operadorAnterior === "+"){
        totalEmExecucao += numero;

    }else if(operadorAnterior === "−"){
        totalEmExecucao -= numero;

    }else if(operadorAnterior === "×"){
        totalEmExecucao *= numero;

    }else if(operadorAnterior === "÷"){
        totalEmExecucao /= numero;
    }
}

function tratarNumero(numeroString){

    if(visorBuffer === "0"){
        visorBuffer = numeroString;
    }else{
        visorBuffer += numeroString;
    }
}

function atualizarTela(){
    tela.innerText = visorBuffer;
}

function iniciarCalculadora(){

    document.querySelectorAll(".botoes").forEach(function(botao){

        botao.addEventListener("click", function(evento){

            const valor = evento.target.innerText.trim();

            cliqueBotao(valor);

        });

    });

}

iniciarCalculadora();