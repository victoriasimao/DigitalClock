function getClock(){
    /* Obteniendo datos del tiempo */
    var theTime = new Date()
    var hours = theTime.getHours()
    var minutes = theTime.getMinutes()
    var seconds = theTime.getSeconds()

    /* Obtener dos cifras para minutos y segundos */
    if(minutes < 10){
        minutes = `0` + minutes
    }
    if(seconds < 10){
        seconds = `0` + seconds
    }

    /* Devolviendo los datos */ 
    var myClock = hours + `:` + minutes + `:` + seconds
    return myClock
}

function startClock(){
    /* Iniciando reloj */
    var finalClock = getClock()
    myClock = document.getElementById(`clock`)
    myClock.innerHTML = finalClock
} 
setInterval(startClock, 1000)

