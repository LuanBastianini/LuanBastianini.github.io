window.onload = function(){
    var w = Math.round(window.innerWidth / 10) 
    var h = Math.round(window.innerHeight / 10)
    for(r = 0; r < h ; r++){
        var tr = document.createElement("tr");
        for(d = 0; d < w; d++){
            var td = document.createElement("td");
            tr.appendChild(td);
        }
        document.getElementById("table").appendChild(tr);
    }
    var andaF = 20,
        andaB = 20;

    var frente = true,
        tras = false,
        baixo = false,
        cima = false;

    var aux = 1,
        cont = 0,
        cobra = 0,
        time = 100;

    var vida = function vida(){
        for(var i = 0; i < 5; i++){
        var tr = Math.round(Math.random() * document.querySelectorAll("tr").length)
        var td = Math.round(Math.random() * document.querySelectorAll("tr")[0].querySelectorAll("td").length)
        console.log(tr + "-" + td);
        document.querySelectorAll("tr")[tr].querySelectorAll("td")[td].setAttribute("Class","vida");
        }
        return vida;
    }();

    function stop(){
        alert("Voce Perdeu");
        clearInterval(interval);
    }

    var interval = setInterval(function(){
        if(andaF < 0 || andaF == document.querySelectorAll("tr")[0].querySelectorAll("td").length || andaB < 0 || andaB == document.querySelectorAll("tr").length){
            stop();
        }

        if(document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].getAttribute("class") == "vida"){
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].removeAttribute("class");
            cobra = cobra + time;
            vida();
        }

        if (frente){
            andaF++;
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].style.backgroundColor = "black";
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].id = aux;
            aux++;
        }else if (tras){
            andaF--;
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].style.backgroundColor = "black";
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].id = aux;
            aux++;
        }else if (cima){
            andaB--;
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].style.backgroundColor = "black";
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].id = aux;
            aux++;
        }else if (baixo){
            andaB++;
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].style.backgroundColor = "black";
            document.querySelectorAll("tr")[andaB].querySelectorAll("td")[andaF].id = aux;
            aux++;
        }
        setTimeout(function(){
            document.getElementById(cont++).setAttribute("style", "background-color: white;");
        }, cobra)
    },time);

    document.addEventListener('keydown',function(e) {
        if(e.which == 37 && (cima || baixo)){
            frente = false,
            tras = true,
            baixo = false,
            cima = false;
        }else if(e.which == 38 && (frente || tras)){
            frente = false,
            tras = false,
            baixo = false,
            cima = true;
        }else if(e.which == 39 && (cima || baixo)){
            frente = true,
            tras = false,
            baixo = false,
            cima = false;
        }else if(e.which == 40 && (frente || tras)){
            frente = false,
            tras = false,
            baixo = true,
            cima = false;
        }
    });
}








