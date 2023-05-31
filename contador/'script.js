function contar(){
var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var pas = document.getElementById('txtp')
var res = document.getElementById('res')
if (ini.value.length==0 || fim.value.length==0 || pas.value.length==0){
window.alert('ERRO!!! faltam dados.')
}else {
    res.innerHTML = 'Contando: <br>'
    var i =  Number(ini.value)
    var f =  Number(fim.value)
    var p=  Number(pas.value)
    if (p <=0){
        window.alert("Passo inválido! considando Passo 1")
        p = 1
    }
    if (i < f) {
        //contagem crescente
        for (var c = i ; c <=f; c += p){
            res.innerHTML +=` ${c}`
        }
    }else {
        //contagem regressiva
        for (var c = i; c >= f; c-=p) {
            res.innerHTML += ` ${c}`
        }
    }
    res.innerHTML +='. <br>Fim!'
}
}