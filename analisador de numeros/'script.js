var num =document.getElementById('fnum')
var lista= document.getElementById('flista')
var res= document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n , l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && !inlista(num.value , valores)){
        valores.push(Number(num.value)) 
        var item = document.createElement('option')
        item.text=`valor ${num.value} adicinado.`
        lista.appendChild(item)
        res.innerHTML = ``
    }else {
        window.alert('Valor inválido ou ja adicionado a lista')
    }
    num.value = ``
    num.focus()
}

function finalizar(){
    if (valores.length==0){
    window.alert('Adicione valore antes de finalizar')

    } else {
        var tot = valores.length
        var  maior = valores[0]
        var menor = valores [0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos]< menor)
            menor =valores[pos]
        }
        media = soma / tot
        res.innerHTML =``
        res.innerHTML +=`<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML +=`<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML +=`<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML +=`<p>Somando todos o valores : ${soma}.</p>`
        res.innerHTML +=`<p>A média de todos os valores é: ${media}.</p>`
    }

}