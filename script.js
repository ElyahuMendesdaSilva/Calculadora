const visor = document.querySelector('.visor');
let Anterior = 0;
let Parenteses;

document.querySelectorAll(".button").forEach(element => {
    element.addEventListener('click', () => {
        let simbolo = element.textContent;
        
        if(simbolo == "AC"){
            visor.textContent = "";
        } else if(simbolo == "( )"){
            if(Parenteses == false){
                Parenteses = true;
                visor.textContent += ")"
            }else{
                Parenteses = false;
                visor.textContent += "("
            }
        }else if(simbolo == "="){
            let originalCont = visor.textContent;
            let Conte = originalCont.replace("X", "*");
            let Resp = eval(Conte);
            visor.textContent = Resp; // Corrigido aqui
            Anterior = 0;
        } else {
            if(!isNaN(simbolo)){
                visor.textContent += simbolo;
                Anterior = 0;
            } else {
                if(Anterior == 0){
                    Anterior = 1;
                    visor.textContent += simbolo;
                }
            }
        }
    });
});
