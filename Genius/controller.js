var nivel = 1;
var clicks = 0;
var jogadas = [];

function acender(luz){
    document.getElementById(luz).classList.add(luz+'_aceso');
    setTimeout(function(){
        document.getElementById(luz).classList.remove(luz+'_aceso');
    },500);
}

function jogar(){
    var cont = 0;
    clicks = 0;
    var e = document.getElementById('centro');
    e.style.pointerEvents = "none";
    e.innerHTML = ""
    var n = Math.round(Math.random() * 3)
    jogadas.push(n);
    var interval = setInterval(function(){
                        if(cont <= jogadas.length){
                            switch (jogadas[cont]) {
                                case 0:
                                    acender("verde");
                                    e.innerHTML = "VERDE";
                                    break;
                                case  1:
                                    acender("vermelho");
                                    e.innerHTML = "VERMELHO";
                                    break;
                                case 2:
                                    acender("azul");
                                    e.innerHTML = "AZUL";
                                    break;
                                case 3:
                                    acender("amarelo");
                                    e.innerHTML = "AMARELO";
                                    break;
                            }
                        }else{
                            clearInterval(interval);
                            e.innerHTML = "ADIVINHE";
                            document.getElementById('verde').style.pointerEvents = "inherit";
                            document.getElementById('vermelho').style.pointerEvents = "inherit";
                            document.getElementById('amarelo').style.pointerEvents = "inherit";
                            document.getElementById('azul').style.pointerEvents = "inherit";
                        }
                        cont++;
                    },1000);

};

function adivinhar(luz){
    clicks++;
    document.getElementById('click').play();
    switch (luz) {
        case 0:
            acender("verde");
            break;
        case  1:
            acender("vermelho");
            break;
        case 2:
            acender("azul");
            break;
        case 3:
            acender("amarelo");
            break;
    }

    if(jogadas[clicks-1] != luz){
        nivel = 1;
        document.getElementById('nivel').innerHTML = nivel;
        resetar();
        document.getElementById('centro').innerHTML = "PERDEU";
        
    }else if(jogadas.length == clicks){
        nivel++;
        document.getElementById('nivel').innerHTML = nivel;
        document.getElementById('verde').style.pointerEvents = "none";
        document.getElementById('vermelho').style.pointerEvents = "none";
        document.getElementById('amarelo').style.pointerEvents = "none";
        document.getElementById('azul').style.pointerEvents = "none";
        jogar();
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