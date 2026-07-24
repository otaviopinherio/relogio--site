console.log("o JS ta funcionando")

// variaveis que chamam funções quando determinado evento é concluido 
window.addEventListener("load",inicio)

let butao1 = window.document.querySelector("#butao-inicio")
butao1.addEventListener("click",inicio)

let butao2 = window.document.querySelector("#butao-cronometro")
butao2.addEventListener("click",cronometro)

let butao_iniciar_cronometro = window.document.querySelector("#iniciar-cronometro")
butao_iniciar_cronometro.addEventListener("click",iniciar_cronometro)

let butao_para_cronometro = window.document.querySelector("#para-cronometro")
butao_para_cronometro.addEventListener("click",para_cronometro)

let butao_restaurar_cronometro = window.document.querySelector("#restaurar-cronometro")
butao_restaurar_cronometro.addEventListener("click",restaurar_cronometro)

let volta = window.document.querySelector("#contar-volta-cronometro")
volta.addEventListener("click",voltas)

// variaveis criadas para serem usadas no restantde do codigo evitando criar mais de uma variavel igual. 
let conteiner_voltas = window.document.querySelector(".conteiner-voltas")
let h1 = window.document.querySelector(".tempo")
let h2 = window.document.querySelector("h2")

// variavel que pega hora atual do pc,servidor, e navegador
let time = new Date()

let segundos = time.getSeconds()
let minutos = time.getMinutes()
let horas = time.getHours()

// A variável relogio começa com null.
// Isso impede a criação de vários setIntervals.
// Na função inicio existe um if que verifica
// se relogio é diferente de null.
// Se já existir um intervalo ativo,
// a função é encerrada imediatamente.
let relogio = null

// segue o mesmo raciocínio da variavel relogio
let cronometro2 = null


// função do relogio principal
function inicio(){
    restaurar_cronometro()
    restaurar_Temporizador()

    clearInterval(cronometro2)
    clearInterval(controleDEintervlaTemporizador)
    clearInterval(controleContinuarTemporizador)
    
    cronometro2 = null
    controleContinuarTemporizador = null
    controleDEintervlaTemporizador = null
    
    conteiner_voltas.innerHTML = ""
    butao_iniciar_cronometro.style.display = "none"
    butao_para_cronometro.style.display = "none"
    
    butao_iniciar_temporizador.style.display = "none"
    para_temporizador.style.display = "none"

    controledotexto.style.display = "none"
    h1.style.display = "flex"
    
    if(relogio !== null){
        return
    }
    
    let h2 = window.document.querySelector("h2")
    h2.style.visibility = "visible"

    relogio = setInterval(()=>{
    segundos++


    let horasformatada = String(horas).padStart(2,"0")
    let minutosformatada = String(minutos).padStart(2,"0")
    let segundosformatada = String(segundos).padStart(2,"0")

    let h1 = window.document.querySelector(".tempo")    
    h1.innerText = `${horasformatada}:${minutosformatada}:${segundosformatada}`

    if(segundos == 60){
        segundos = 0
        minutos++
    }else if(minutos == 60){
        minutos = 0
        horas++
    }else if(horas == 60){
        horas = 0
    }

    },1000)
}


// variaveis do cronometro
let horas_cronometro = 0
let minutos_cronometro = 0
let segundos_cronometro = 0
let milesegundo_cronometro = 0


function cronometro(){
    restaurar_Temporizador()
    h1.style.display = "flex"
    controledotexto.style.display = "none"
    butao_iniciar_cronometro.style.display = "flex"
    butao_para_cronometro.style.display = "flex"

    butao_iniciar_temporizador.style.display = "none"
    para_temporizador.style.display = "none"
    
    clearInterval(relogio)
    clearInterval(controleDEintervlaTemporizador)
    clearInterval(controleContinuarTemporizador)
    
    controleContinuarTemporizador = null
    controleDEintervlaTemporizador = null
    relogio = null

    let cronometro_hora = String(horas_cronometro).padStart(2,"0")
    let cronometro_minuto = String(minutos_cronometro).padStart(2,"0")
    let cronometro_segundo = String(segundos_cronometro).padStart(2,"0")
    let cronometro_milisegundo = String(milesegundo_cronometro).padStart(2,"0")
    h2.style.visibility = "hidden"
    
    h1.innerText = `${cronometro_minuto}:${cronometro_segundo}:${cronometro_milisegundo}`

}


function iniciar_cronometro(){        
        controledotexto.style.display = "none"
        volta.style.display = "flex"
        butao_iniciar_cronometro.style.display = "none"
        
        cronometro2 = setInterval(() =>{
        milesegundo_cronometro++
        
                
        let cronometro_hora = String(horas_cronometro).padStart(2,"0")
        let cronometro_minuto = String(minutos_cronometro).padStart(2,"0")
        let cronometro_segundo = String(segundos_cronometro).padStart(2,"0")
        let cronometro_milisegundo = String(milesegundo_cronometro).padStart(2,"0")



        if(milesegundo_cronometro == 100){
            milesegundo_cronometro = 0
            segundos_cronometro++
        }else if(segundos_cronometro == 60){
            segundos_cronometro = 0
            minutos_cronometro++
        }else if(minutos_cronometro == 60){
            minutos_cronometro = 0
            horas_cronometro++
        }

        h1.innerText = `${cronometro_hora}:${cronometro_minuto}:${cronometro_segundo}:${cronometro_milisegundo}`

    },10)
   
}

function para_cronometro(){
    clearInterval(cronometro2)
    cronometro2 = null

    butao_restaurar_cronometro.style.display = "flex"
    volta.style.display = "none"
}

function restaurar_cronometro(){
    volta_contador = 0
    conteiner_voltas.innerHTML = ""
    
    butao_restaurar_cronometro.style.display = "none"
    butao_iniciar_cronometro.style.display = "flex"
    volta.style.display = "none"


    horas_cronometro = 0
    milesegundo_cronometro = 0
    segundos_cronometro = 0
    minutos_cronometro = 0

    let cronometro_hora = String(horas_cronometro).padStart(2,"0")
    let cronometro_minuto = String(minutos_cronometro).padStart(2,"0")
    let cronometro_segundo = String(segundos_cronometro).padStart(2,"0")
    let cronometro_milisegundo = String(milesegundo_cronometro).padStart(2,"0")

    h1.innerText = `${cronometro_hora}:${cronometro_minuto}:${cronometro_segundo}:${cronometro_milisegundo}`

}

// variavel para controlar as voltas que o cronometro marca
let volta_contador = 0

function voltas(){
    volta_contador++
    let cronometro_hora = String(horas_cronometro).padStart(2,"0")
    let cronometro_minuto = String(minutos_cronometro).padStart(2,"0")
    let cronometro_segundo = String(segundos_cronometro).padStart(2,"0")
    let cronometro_milisegundo = String(milesegundo_cronometro).padStart(2,"0")
    
    
    let p = document.createElement("p")
    conteiner_voltas.appendChild(p)


    p.innerText = `volta ${volta_contador} - ${cronometro_hora}:${cronometro_minuto}:${cronometro_segundo}:${cronometro_milisegundo}` 
}


let chamar_temporizador = document.querySelector("#butao-temporizador")
chamar_temporizador.addEventListener("click",temporizador)

let hora_temporizador = 0
let minuto_temporizador = 0
let segundos_temporizador = 0


let butao_iniciar_temporizador = document.querySelector("#iniciar-temporizador")
butao_iniciar_temporizador.addEventListener("click",temporizador_iniciar)

let para_temporizador = document.querySelector("#para-temporizador")
para_temporizador.addEventListener("click",paraTemporizador)

let controledotexto = document.querySelector(".inputs-temporizador") 

let restaurarTemporizador = document.querySelector("#restaurar-temporizador")
restaurarTemporizador.addEventListener("click",restaurar_Temporizador)

let continuarTemporizador = document.querySelector("#continuar-temporizador")
continuarTemporizador.addEventListener("click",continuar_temporizador)

const input_hora = document.querySelector("#hora-temporizador")

const input_minuto = document.querySelector("#minuto-temporizador")

const input_segundo = document.querySelector("#segundo-temporizador")
input_hora.addEventListener("input",verificar_input)
input_minuto.addEventListener("input",verificar_input2)
input_segundo.addEventListener("input",verificar_iniciarTemporizador)

function temporizador(){
    restaurar_cronometro()
    clearInterval(relogio)
    relogio = null
    clearInterval(cronometro2)
    cronometro2 = null
    clearInterval(controleDEintervlaTemporizador)
    controleDEintervlaTemporizador = null
    
    h2.style.visibility = "hidden"
    butao_iniciar_cronometro.style.display = "none"
    butao_para_cronometro.style.display = "none"
    volta.style.display = "none"
    

    butao_iniciar_temporizador.style.display = "flex"
    para_temporizador.style.display = "flex"
    controledotexto.style.display = "flex"


    let temporizadorHora = String(hora_temporizador).padEnd(2,"0")
    let temporizadorMinuto = String(minuto_temporizador).padEnd(2,"0")
    let temporizadorSegundo = String(segundos_temporizador).padEnd(2,"0")

    h1.innerHTML = `${temporizadorHora}:${temporizadorMinuto}:${temporizadorSegundo}`
}

let controleDEintervlaTemporizador = null

let tempototal = 0

let horaT = 0
let minutoT = 0
let segundoT = 0

function temporizador_iniciar(){
    controledotexto.style.display = "none"
    h1.style.display = "flex"
    
    horaT = Number(document.querySelector("#hora-temporizador").value)
    minutoT = Number(document.querySelector("#minuto-temporizador").value)
    segundoT = Number(document.querySelector("#segundo-temporizador").value)

    
    tempototal = horaT * 3600 + minutoT * 60 + segundoT
    
    if(controleDEintervlaTemporizador !== null){
        return
    }

    controleDEintervlaTemporizador = setInterval(function(){
        console.log("interval de iniciar funcionando")
        tempototal--
        mostrarTemporizador()
        
        
    if(tempototal <= 0){
        restaurar_Temporizador()
    }

    },1000)

}

function mostrarTemporizador(){
    h1.style.display = "flex"
    
    horaT = Math.floor(tempototal / 3600)

    minutoT = Math.floor((tempototal % 3600) / 60)
    
    segundoT = tempototal % 60
    
    h1.innerHTML = `${String(horaT).padStart(2,"0")}:${String(minutoT).padStart(2,"0")}:${String(segundoT).padStart(2,"0")}`
}

function paraTemporizador(){
    clearInterval(controleContinuarTemporizador)
    controleContinuarTemporizador = null

    continuarTemporizador.style.display = "flex"
    restaurarTemporizador.style.display = "flex"
    butao_iniciar_temporizador.style.display = "none"
    clearInterval(controleDEintervlaTemporizador)

}

function restaurar_Temporizador(){
    clearInterval(controleDEintervlaTemporizador)
    clearInterval(controleContinuarTemporizador)
    controleContinuarTemporizador = null    
    controleDEintervlaTemporizador = null

    continuarTemporizador.style.display = "none"
    restaurarTemporizador.style.display = "none"
    butao_iniciar_temporizador.style.display = "flex"
    controledotexto.style.display = "flex"
    h1.style.display = "none"
    
    tempototal = 0
    
    horaT = 0
    segundoT = 0
    minutoT = 0
    
    document.querySelector("#hora-temporizador").value = ""
    document.querySelector("#minuto-temporizador").value = ""
    document.querySelector("#segundo-temporizador").value = ""
      
    h1.innerHTML = `${String(horaT).padStart(2,"0")}:${String(minutoT).padStart(2,"0")}:${String(segundoT).padStart(2,"0")}`
}

function verificar_input(){
    if(input_hora.value.length == 2){
        input_minuto.focus()
    }
}

function verificar_input2(){
    if(input_minuto.value.length == 2){
        input_segundo.focus()
    }
}

function verificar_iniciarTemporizador(){
    if(input_segundo.value.length == 2){
        butao_iniciar_temporizador.focus()
    }
}

let controleContinuarTemporizador = null

function continuar_temporizador(){
    continuarTemporizador.style.display = "none"
    restaurarTemporizador.style.display = "none"

    if(controleContinuarTemporizador !== null){
        return
    }

    controleContinuarTemporizador = setInterval(function(){
        tempototal--
        mostrarTemporizador()

        if(tempototal <= 0){
            restaurar_Temporizador()
        }

    },1000)
}