
const listaTeclas = document.querySelectorAll(".tecla");


listaTeclas.forEach(tecla => {
     
    const classeTecla = tecla.classList[1];
    tecla.onclick = function () { 
        console.log(classeTecla);
        
        tocaAudio(classeTecla)
    }
    tecla.onkeydown = function (ev) {
        console.log(ev)
        if('Space' === ev.code || 'Enter' === ev.code)
        {
            tecla.classList.add('ativa');
        } 
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
});


function tocaAudio(tecla){
    elemento = document.querySelector(`#som_${tecla}`);
    if(elemento && elemento.localName === "audio"){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou inválido!')
    }
}
