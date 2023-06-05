var sec=00
var min=00
var hor=00
var Interval
function doisdigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function iniciar(){
    contador()
   Interval= setInterval(contador,1000)
}

function pausar(){
    clearInterval(Interval)
}

function parar(){
    clearInterval(Interval)
    sec=0
    min=0
    document.getElementById('contador').innerHTML='00:00:00'
}



function contador(){
sec++
    
    if(sec==60){
        min++
        sec=0
        
       }
        if(min==60){
        hor++
        min=0
       }
     document.getElementById('contador').innerHTML=doisdigitos(hor)+':'+doisdigitos(min)+':'+doisdigitos(sec)

}