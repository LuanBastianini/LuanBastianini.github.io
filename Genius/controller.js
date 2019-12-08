var nivel = 1;
var clicks = 0;
var jogadas = [];

function acender(luz){
    document.getElementById(luz).classList.add(luz+'_aceso');
    setTimeout(function(){
        document.getElementById(luz).classList.remove(luz+'_aceso');
    },1000);
}

function jogar(e){
    var cont = nivel;
    e.style.pointerEvents = "none";
    e.innerHTML = nivel;
    var interval = setInterval(function(){
                        var n = Math.round(Math.random() * 3)
                        jogadas.push(n);
                        switch (n) {
                            case 0:
                                acender("verde");
                                break;
                            case  1:
                                acender("vermelho");
                                break;
                            case 2:
                                acender("amarelo");
                                break;
                            case 3:
                                acender("azul");
                                break;
                        }
                        cont--;
                        if(cont == 0)
                            clearInterval(interval);
                    },2000);

    document.getElementById('verde').style.pointerEvents = "inherit";
    document.getElementById('vermelho').style.pointerEvents = "inherit";
    document.getElementById('amarelo').style.pointerEvents = "inherit";
    document.getElementById('azul').style.pointerEvents = "inherit";
};

function adivinhar(luz){
    clicks++;
    switch (luz) {
        case 0:
            acender("verde");
            break;
        case  1:
            acender("vermelho");
            break;
        case 2:
            acender("amarelo");
            break;
        case 3:
            acender("azul");
            break;
    }
    if(jogadas[clicks-1] != luz){
        nivel = 1;
        resetar();
        document.getElementById('centro').innerHTML = "PERDEU";
        
    }else if(jogadas.length == clicks){
        nivel++;
        resetar();
    }
}

function resetar(){
    document.getElementById('verde').style.pointerEvents = "none";
    document.getElementById('vermelho').style.pointerEvents = "none";
    document.getElementById('amarelo').style.pointerEvents = "none";
    document.getElementById('azul').style.pointerEvents = "none";
    document.getElementById('centro').innerHTML = "JOGAR";
    document.getElementById('centro').style.pointerEvents = "inherit";
    clicks = 0;
    jogadas = [];
}