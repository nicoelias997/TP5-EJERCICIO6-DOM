const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");
const temporizador = document.getElementById("temporizador")

const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reset = document.getElementById("reset")

let horasUsuario;
let minutosUsuario;
let segundosUsuario;


hora.addEventListener("click",
elegirHora = () => {
horasUsuario = parseFloat(prompt("Elija sus horas"));
if(horasUsuario < 10){
hora.innerHTML = `0${horasUsuario}:`
} else {
hora.innerHTML = `${horasUsuario}:`
}
})

minuto.addEventListener("click",
elegirMinuto = () => {
minutosUsuario = parseFloat(prompt("Elija sus minutos"))
if(minutosUsuario < 60 && minutosUsuario >= 0){
if(minutosUsuario < 10){
    minuto.innerHTML = `0${minutosUsuario}:`
    } else {
    minuto.innerHTML = `${minutosUsuario}:`
    }
} else {
    alert("Ingrese minutos entre 0 y 59");
    return elegirMinuto()
}
})

segundo.addEventListener("click",
elegirSegundo = () => {
segundosUsuario = parseFloat(prompt("Elija sus segundos"))
if(segundosUsuario < 60 && segundosUsuario >= 0){
if(segundosUsuario < 10){
    segundo.innerHTML = `0${segundosUsuario}`
    } else {
    segundo.innerHTML = `${segundosUsuario}`
    }
    
}  else {
    alert("Ingrese minutos entre 0 y 59");
    return elegirSegundo()
}
})


let intervalo;

iniciar.addEventListener("click", iniciarTemp = () => {
    if(horasUsuario == undefined || horasUsuario == NaN){
        horasUsuario = 0
    }
    if(minutosUsuario == undefined || minutosUsuario == NaN){
        minutosUsuario = 0
    }
    if(segundosUsuario == undefined || segundosUsuario == NaN){
        segundosUsuario = 0
    }

    if(horasUsuario == 0 && minutosUsuario == 0 && segundosUsuario == 0){
        alert("Ingrese un tiempo correcto")
    } else {

    intervalo = setInterval(() => {
    //Solo si hay horas
    if(horasUsuario != 0 && minutosUsuario == 0 && segundosUsuario == 0){
        segundosUsuario--
        horasUsuario = horasUsuario - 1
        minutosUsuario = 59
        segundosUsuario = 60
    }
    //Solo si hay minutos
    if(horasUsuario == 0 && minutosUsuario != 0 && segundosUsuario == 0){
        segundosUsuario--
        segundosUsuario = 60
        minutosUsuario = minutosUsuario - 1
    }
    //Solo si hay segundos
    if(segundosUsuario != 0 && minutosUsuario == 0 && horasUsuario == 0){
        segundosUsuario--
    }
    //Solo si hay segundos y minutos
    if(segundosUsuario != 0 && minutosUsuario != 0 && horasUsuario == 0){
        segundosUsuario--
    if(segundosUsuario == 0){
        minutosUsuario--
        segundosUsuario = 60
    }
    }
    //Solo si hay horas, min y segundos
    if(horasUsuario != 0 && minutosUsuario != 0 && segundosUsuario != 0){
        segundosUsuario--
        if(segundosUsuario == 0 && minutosUsuario != 0 && horasUsuario != 0){
            minutosUsuario--
            segundosUsuario = 60
        }

        if( minutosUsuario == 0 && horasUsuario != 0){
            horasUsuario--
            minutosUsuario = 59
            segundosUsuario = 60
        }    
    }
    //Solo si hay horas y minutos
    if(horasUsuario != 0 && minutosUsuario != 0 && segundosUsuario == 0){
        segundosUsuario--
        segundosUsuario = 60
        minutosUsuario = minutosUsuario - 1
        if(minutosUsuario == 0){
            horasUsuario--
            minutosUsuario = 59
        }

    }
    


    if(segundosUsuario == 00 && minutosUsuario == 00 && horasUsuario == 00){
        clearInterval(intervalo);
        iniciar.disabled = false
        alert("Su tiempo se acabo!");
        horasUsuario = "00";
        minutosUsuario = "00";
        segundosUsuario = "00";
        return resetTemp()
        }

        hora.innerHTML = `${horasUsuario}:`;
        minuto.innerHTML = `${minutosUsuario}:`;
        segundo.innerHTML = `${segundosUsuario}`;

    iniciar.disabled = true
    } ,1) 

}
})



pausar.addEventListener("click", pausarTemp = () => {
    clearInterval(intervalo)
    iniciar.disabled = false;
})

reset.addEventListener("click", resetTemp = () => {
    clearInterval(intervalo)
    horasUsuario = 0;
    minutosUsuario = 0;
    segundosUsuario = 0;
    hora.innerHTML = "00:"
    minuto.innerHTML = "00:"
    segundo.innerHTML = "00"
    iniciar.disabled = false;
})

